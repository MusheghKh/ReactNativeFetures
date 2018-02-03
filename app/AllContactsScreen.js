import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Alert
} from 'react-native';

class AllContactsScreen extends Component {

    showOpenChatScreenAlert(){
        let { navigation } = this.props;
        Alert.alert(
            'Open Chat',
            'Are you sure you want open chat screen',
            [
                {text: 'Cancel', onPress: () => null },
                {text: 'OK', onPress: () => navigation.navigate('Chat', {user: 'Lucy'}) },
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button
                    onPress={ () => this.showOpenChatScreenAlert() }
                    title="Chat with Lucy"
                />
            </View>
        )
    }
}

export default AllContactsScreen;