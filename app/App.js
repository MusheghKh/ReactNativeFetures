import React, {Component} from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'react-native-firebase';
import PushNotification from 'react-native-push-notification';

import MainStack from './Navigator';
import store from './store';

firebase.messaging().onMessage((msg) => {
	let { title, body } = msg.fcm;
	PushNotification.localNotification({
		title,
		message: body
	});
});

const URL = 'https://api.500px.com/v1/photos';
const CONSUMER_KEY = '5NEaRSLd0twDCl8uNLDN7cePwjNGuqW2XlvoA88j';
const SORTING = 'highest_rating';

export default class App extends Component<{}> {
    componentDidMount() {
        fetch(`${URL}/search?term=${'nature'}&page=1&rpp=20&image_size=440&sort=${SORTING}&consumer_key=${CONSUMER_KEY}`)
          .then(response => response.json())
          .then(response => {
            let res = response;
            debugger;
          })
    }
    render() {
        return (
        	<Provider store={store}>
        		<MainStack />
        	</Provider>
        )
    }
}
