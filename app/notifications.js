import { Alert } from 'react-native';
import BackgroundTask from 'react-native-background-task';
import firebase from 'react-native-firebase';
import PushNotification from 'react-native-push-notification';
// https://github.com/jamesisaac/react-native-background-task for full information on how this works.

export default class Notifications {
	static setBgTaskPeriod(period = 900, timeout = 30) {
		console.log('scheduled');
		BackgroundTask.schedule({ period, timeout });

		Notifications.checkStatus();
	}

	static startBgTask(action, callback) {
		BackgroundTask.define(() => {
			debugger;
			console.log('started');
			switch(action.type) {
				case 'web-fetch':
					fetch(action.url, action.options).then(callback);
				case 'firebase':
					firebase.messaging().onMessage((msg) => {
						let { title, body } = msg.fcm;
						Notifications.notify({ title, message: body });
					});
				case 'custom':
				default:
					callback();
			}

			Notifications.finishBgTask();
		});

		Notifications.setBgTaskPeriod();
	}

	static cancelBgTask() {
		BackgroundTask.cancel();
	}

	static finishBgTask() {
		BackgroundTask.finish();
	}

	static notify({ title, message }) {
		PushNotification.localNotification({ title, message });
	}

	static async checkStatus() {
		const status = await BackgroundTask.statusAsync();

		if(status.available) {
			return;
		}

		const reason = status.unavailableReason;

		if(reason === BackgroundTask.UNAVAILABLE_DENIED) {
			Alert.alert('Denied', 'Please enable background "Background App Refresh" for this app.');
		} else if(reason === BackgroundTask.UNAVAILABLE_RESTRICTED) {
			Alert.alert('Restricted', 'Background tasks are restricted on your device.');
		}
	}
}