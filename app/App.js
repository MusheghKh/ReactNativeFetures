import React, {Component} from 'react';
import { Platform, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

import MainStack from './Navigator';

firebase.messaging().onMessage((obj) => {
	Alert.alert(JSON.stringify(obj));
});

export default class App extends Component<{}> {
    render() {
        return <MainStack />;
    }
}
