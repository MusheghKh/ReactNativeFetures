import React, {Component} from 'react';
import { Platform, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import PushNotification from 'react-native-push-notification';

import MainStack from './Navigator';

firebase.messaging().onMessage((msg) => {
	let { title, body } = msg.fcm;
	PushNotification.localNotification({
		title: title,
		message: body
	});
});

export default class App extends Component<{}> {
    render() {
        return <MainStack />;
    }
}
