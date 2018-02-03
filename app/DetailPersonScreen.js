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

		this.state = {
			person: null,
		};
	}

	componentDidMount(){
		let { params } = this.props.navigation.state;
		this.setState({person: params.person});
	}

	render(){
		let { name } = this.state.person;
		return (
			<View>
				<Text>asdds</Text>
				<Text>{name.firstname} {name.lastname}</Text>
			</View>
		)
	}
}

export default DetailPersonScreen;