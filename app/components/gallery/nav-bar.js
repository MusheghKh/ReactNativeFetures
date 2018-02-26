import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SearchBar, Tile } from 'react-native-elements';
import { capitalize, replaceLodash } from '../../helpers/custom-helper-functions';

class NavBar extends Component {
	render() {
		const { features, activeTab, selectFeature } = this.props;
		const { container, tabs, tab, activeTabBg, tabText, activeTabText } = styles;

		return(
			<View style={container}>
				<SearchBar placeholder='' lightTheme round onSubmitEditing={input => this.props.search(input)}/>
				<View style={tabs}>
					{Object.keys(features).map(feature => (<TouchableOpacity
						key={capitalize(replaceLodash(features[feature]))}
						onPress={() => selectFeature(feature)}
						style={[tab, feature === activeTab ? activeTabBg : {}]}>
							<Text style={[tabText, feature === activeTab ? activeTabText : {}]}>{capitalize(replaceLodash(features[feature]))}</Text>
						</TouchableOpacity>))}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column'
	},
	tabs: {
		flexDirection: 'row',
		flexWrap: 'wrap', 
		justifyContent: 'center'
	},
	tab: {
		borderColor: '#f1f1eb',
		borderWidth: 1,
		margin: 5,
		padding: 5,
		borderRadius: 15
	},
	activeTabBg: {
		backgroundColor: '#f1f1eb'
	},
	tabText: {
		color: '#0099CC',
		textAlign: 'center'
	},
	activeTabText: {
		color: '#81c04d'
	}
});

export default NavBar;