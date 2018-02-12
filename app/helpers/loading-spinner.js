import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class LoadingSpinner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: this.props.loading || false,
			style: this.props.style || { paddingVertical: 20, borderColor: "#CED0CE" }
		}
	}

	componentWillReceiveProps(nextProps) {
		nextProps.loading !== undefined && this.setState({ loading: nextProps.loading });
	}

	render() {
		if(this.state.loading) {	
			return(
	      <View style={this.state.style}>
	        <ActivityIndicator animating size="large" />
	      </View>
			)
		}

		return null;
	}
}

export default LoadingSpinner;