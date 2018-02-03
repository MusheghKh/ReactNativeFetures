import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

class DetailPersonScreen extends Component{
	static navigationOptions = {
		title: 'Details'
	}

	constructor(props){
		super(props);

		let { person } = this.props.navigation.state.params;
		this.state = {
			person: person
		};
	}

	render(){
		let { name } = this.state.person;
		return (
			<View>
				<Text>Firstname: {name.first}, Lastname: {name.last}</Text>
			</View>
		)
	}
}

export default DetailPersonScreen;