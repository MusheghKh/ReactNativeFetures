import React, {Component} from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import MainStack from './Navigator';
import firebase from 'react-native-firebase';
import Notifications from './notifications';
import store from './store';
import RNFB from 'react-native-fetch-blob';
firebase.messaging().onMessage((msg) => {
    let { title, body } = msg.fcm;
    Notifications.notify({ title, message: body });
});

//Notifications.startBgTask({ type: 'notify', title: 'Test', message: 'Background Task says "kuku epta!"' });

export default class App extends Component<{}> {
    render() {
        console.log(RNFB.fs.dirs);
        return (
        	<Provider store={store}>
        		<MainStack />
        	</Provider>
        )
    }
}