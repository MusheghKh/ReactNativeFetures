import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const style = StyleSheet.create({
	container: {
    backgroundColor: 'transparent',
    transform: [{ translateY: Dimensions.get('window').height * 0.2 }],
    alignItems: 'center',
    justifyContent: 'center'
	}
});

class NoResults extends Component {
	render() {
		return (
			<View style={style.container}>
        <Icon name="circle-with-cross" size={90}/>
        <Text size={60}>NO RESULTS</Text>
	    </View>
		)
	}
}

export default NoResults;