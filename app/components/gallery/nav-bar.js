import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { SearchBar, Tile } from 'react-native-elements';
import { capitalize, replaceLodash } from '../../helpers/custom-helper-functions';

class NavBar extends Component {
	constructor(props) {
		super(props);
		const { features, activeTab } = this.props;
		this.state = { features, activeTab, saveMode: false }
	}

	componentWillReceiveProps({ activeTab, saveMode }) {
		this.setState({ activeTab, saveMode });
	}

	render() {
		const { features, activeTab, saveMode } = this.state;
		const { selectFeature } = this.props;
		const { container, tabs, tab, activeTabBg, tabText, activeTabText, saveBtn } = styles;

		return(
			<View style={container}>
				<SearchBar placeholder='' lightTheme round onSubmitEditing={({ nativeEvent }) => this.props.search(nativeEvent.text)}/>
				{!saveMode && <View style={tabs}>
					{Object.keys(features).map(feature => (<TouchableOpacity
						key={feature}
						onPress={() => selectFeature(feature)}
						style={[tab, feature === activeTab ? activeTabBg : {}]}>
							<Text style={[tabText, feature === activeTab ? activeTabText : {}]}>{capitalize(replaceLodash(features[feature]))}</Text>
						</TouchableOpacity>))}
				</View>}
				{saveMode && <TouchableOpacity
						style={[tab, activeTabBg, saveBtn]}
						onPress={() => this.props.saveAllSelections()}>
							<Text style={activeTabText}>Save</Text>
					</TouchableOpacity>}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		minHeight: 100
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
		color: '#81c04d',
		textAlign: 'center'
	},
	saveBtn: {
		flex: 1
	}
});

export default NavBar;