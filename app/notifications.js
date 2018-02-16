import { Alert } from 'react-native';
import BackgroundTask from 'react-native-background-task';
import PushNotification from 'react-native-push-notification';
import RealmDB from './helpers/RealmDB';
import createGUID from './helpers/createGUID';
// https://github.com/jamesisaac/react-native-background-task for full information on how this works.

export default class Notifications {
	static setBgTaskPeriod(period = 900, timeout = 30) {
		BackgroundTask.schedule({ period, timeout });

		Notifications.checkStatus();
	}

	static async planBgTask(action, callback, period, timeout) {
			await RealmDB.save('BackgroundTasksPlanning', { id: createGUID(), action, callback, period, timeout });
	}

	static async startPlannedTask(id) {
		await RealmDB.find('BackgroundTasksPlanning', id).then(({ action, callback, period, timeout }) => {
			Notifications.startBgTask(action, callback, period, timeout);
		});
	}

	static startBgTask(action, callback, period, timeout) {
		BackgroundTask.define(async () => {
			switch(action.type) {
				case 'web-fetch':
					await fetch(action.url, action.options).then(callback);
				case 'notify':
					await Notifications.notify({ title: action.title, message: action.message });	
				case 'custom':
				default:
					await typeof callback === 'function' && callback();
			}

			// uncomment line below, if you want the task run only once
			//Notifications.finishBgTask();
		});

		Notifications.setBgTaskPeriod(period, timeout);
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