import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar, Tile } from 'react-native-elements';
import { capitalize, replaceLodash } from '../../helpers/custom-text-transformations';

class NavBar extends Component {
	render() {
		const { features, activeTab } = this.props;

		return(
			<View style={styles.container}>
				<SearchBar placeholder='' lightTheme round onSubmitEditing={input => this.props.search(input)}/>
				{Array.prototype.map.call(features, feature => (<TouchableOpacity key={capitalize(replaceLodash(feature))} />))}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabs: {
		justifyContent: 'center',
		color: '#0099CC'
	},
	tab: {
		backgroundColor: ''
	}
})