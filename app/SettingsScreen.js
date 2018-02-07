import React, {Component} from 'react';
import { View, Text, Button, Switch, StyleSheet, Alert, TextInput, AsyncStorage } from 'react-native';

export default class SettingsScreen extends Component{
	state = {
		blackBackground: false,
		username: '',
	}

	componentDidMount(){
		this.storageToState();
	}

	storageToState = async () => { 
		try {
  			const value = await AsyncStorage.getItem('@DemoRNStore:settings_background');
  			if (value !== null){
    			this.setState({blackBackground: value === 'true'});
  			}
		} catch (error) {
			console.error(error);
  			// Alert.alert(JSON.stringify(error));
		}
		try {
  			const value = await AsyncStorage.getItem('@DemoRNStore:settings_username');
  			if (value !== null){
    			this.setState({username: value});
  			}
		} catch (error) {
			console.error(error);
  			// Alert.alert('get username error');
		}
	}

	toggleSwitch = (value) => {
		this.setState({blackBackground: value}, () => {
			this.storeBackground(value);
		});
	}

	storeBackground = async (value) => {
		try {
  			await AsyncStorage.setItem('@DemoRNStore:settings_background', value.toString());
		} catch (error) {
			console.error(error);
  			// Alert.alert('put background error');
		}
	}

	onUserNameChanged = (text) => {
		this.setState({username: text}, () => {
			this.storeUserName(text);
		});
	}

	storeUserName = async (username) => {
		try {
  			await AsyncStorage.setItem('@DemoRNStore:settings_username', username);
		} catch (error) {
			console.error(error);
  			// Alert.alert('put username error');
		}
	}

	containerBackground = () => {
		let container = {
			flex: 1,
		};
		if (this.state.blackBackground) {
			container.backgroundColor = 'black';
		}
		return container;
	}

	render(){
		let { blackBackground } = this.state;
		return(
		<View style={ this.containerBackground() }>
			<View style={styles.row}>
				<Text style={styles.leftItem} >Black background</Text>
				<Switch
					style={styles.rightItem}
					onValueChange = { this.toggleSwitch }
					value = {blackBackground}
				/>
			</View>
			<View style={styles.row}>
				<Text style={styles.leftItem} >Input your name</Text>
				<TextInput
        			style={styles.rightItem, styles.input}
        			onChangeText={(text) => this.onUserNameChanged(text)}
        			value={this.state.username}
      			/>
      		</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({

	row: {
		paddingTop: 8,
		paddingBottom: 8,
		alignSelf: 'stretch',
		backgroundColor: 'white',
		flexDirection: 'row',
	},

	input: {
		borderColor: 'gray',
		borderWidth: 1, 
		width: 150
	},

	rightItem: {
		flex:1,
		marginRight: 8,
    	flexDirection: 'row',
    	justifyContent: 'flex-end',
	},

	leftItem: {
		marginLeft: 8,
		alignSelf: 'center',
		flex:1,
	},

	blackBackground: {
		backgroundColor: 'black',
	},

	greenBackground: {
		backgroundColor: 'green',
	}
});