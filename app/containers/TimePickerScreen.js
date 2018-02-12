import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';

class TimePickerScreen extends Component{
	state = {
		isDateTimePickerVisible: false,
	}

	_showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

	_hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

	_handleDatePicked = (date) => {
		this._hideDateTimePicker();
		Alert.alert(date);
	}

	render(){
		return(
			<View style={styles.container}>
				<Button 
					color='red'
					title="Show DatePicker"
					onPress={this._showDateTimePicker}>
				</Button>
				<DateTimePicker
					isVisible={this.state.isDateTimePickerVisible}
					onConfirm={(date) => this._handleDatePicked(date)}
					onCancel={this._hideDateTimePicker}
					datePickerModeAndroid="calendar"
					mode="datetime"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		width: '100%', 
		height: '100%', 
		backgroundColor: 'black',
		justifyContent: 'center',
    	alignItems: 'center',
	},
});

export default TimePickerScreen;