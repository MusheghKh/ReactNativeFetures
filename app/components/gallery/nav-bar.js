import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar, Tile } from 'react-native-elements';
import { capitalize, replaceLodash } from '../../helpers/custom-helper-functions';

class NavBar extends Component {
	render() {
		const { features, activeTab } = this.props;
		const { container, tab } = styles;

		return(
			<View style={container}>
				<SearchBar placeholder='' lightTheme round onSubmitEditing={input => this.props.search(input)}/>
				{Array.prototype.map.call(features, feature => (<TouchableOpacity key={capitalize(replaceLodash(feature))} style={tab}/>))}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	tab: {
		backgroundColor: '#fff',
		color: '#0099CC',
		borderRadius: 10
	}
});

export default NavBar;