import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
} from 'react-native';

import MainStack from './Navigator';

export default class App extends Component<{}> {
    render() {
        return <MainStack />;
    }
}
