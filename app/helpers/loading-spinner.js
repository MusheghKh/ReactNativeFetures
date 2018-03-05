import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class LoadingSpinner extends Component {
	constructor(props) {
		super(props);
		const { loading, color, size, style } = this.props;
		this.state = {
			loading: loading || false,
			color: color || '#81c04d',
			size: size || 'large',
			style: style || { paddingVertical: 20, borderColor: "#CED0CE" }
		}
	}

	componentWillReceiveProps({ loading }) {
		loading !== undefined && this.setState({ loading });
	}

	render() {
		const { loading, color, style, size } = this.state;
		if(loading) {
			return(
	      <View style={this.state.style}>
	        <ActivityIndicator animating size={size} color={color} />
	      </View>
			)
		}

		return null;
	}
}

export default LoadingSpinner;