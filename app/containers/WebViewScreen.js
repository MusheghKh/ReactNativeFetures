import React, {Component} from 'react';
import {
    WebView,
    View,
} from 'react-native';

class WebViewScreen extends Component{
	render(){
		return (
			<WebView
        		source={{uri: 'https://github.com/facebook/react-native'}}
      		/>
      	);
	};
}

export default WebViewScreen;