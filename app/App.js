import React, {Component} from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'react-native-firebase';
import PushNotification from 'react-native-push-notification';
import SQLite from 'react-native-sqlite-storage';

import MainStack from './Navigator';
import store from './store';

firebase.messaging().onMessage((msg) => {
	let { title, body } = msg.fcm;
	PushNotification.localNotification({
		title: title,
		message: body
	});
});

//SQLite.openDatabase({name: 'DemoRN'})

export default class App extends Component<{}> {
    render() {
        return (
        	<Provider store={store}>
        		<MainStack />
        	</Provider>
        )
    }
}
