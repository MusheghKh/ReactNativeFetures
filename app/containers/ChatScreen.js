import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

class ChatScreen extends Component {
    static navigationOptions = ({navigation: navigation}) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
            title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
            headerRight: (
                <Button
                    title={isInfo ? 'Done' : `${user}'s info`}
                    onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}
                />
            ),
        };
    };

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        )
    }
}

export default ChatScreen;