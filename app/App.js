import React, {Component} from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import MainStack from './Navigator';
import Notifications from './notifications';
import store from './store';

Notifications.startBgTask({ type: 'custom' }, () => Notifications.notify({ title: 'Hello', message: 'Background task test' }));

export default class App extends Component<{}> {
    componentDidMount() {
        Notifications.notify({ title: 'Hello', message: 'Simple notifications test' });
    }

    render() {
        return (
        	<Provider store={store}>
        		<MainStack />
        	</Provider>
        )
    }
}
