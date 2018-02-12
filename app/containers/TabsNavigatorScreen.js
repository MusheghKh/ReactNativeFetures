import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Tab1 extends Component{
	render(){
		return(
			<Text>This is Tab N1</Text>
		);
	}
};

class Tab2 extends Component{
	render(){
		return(
			<Text>This is Tab N2</Text>
		);
	}
};

const TabsNavigatorScreen = TabNavigator({
	Tab1: {
		screen: Tab1,
	},
	Tab2: { 
		screen: Tab2,
	}
}, {
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			let iconName;
			switch(routeName){
				case 'Tab1':
					iconName: `ios-information-circle${focused ? '' : '-outline'}`;
					break;
				case 'Tab2':
					iconName = `ios-options${focused ? '' : '-outline'}`;
					break;
			}
			return <Ionicons name={iconName} size={25} color={tintColor} />
		},
	}),
	tabBarOptions:  {
		activeTintColor: 'black',
		inactiveTintColor: 'green',
		style: {
			backgroundColor: 'white',
		}
	}
});

export default TabsNavigatorScreen;