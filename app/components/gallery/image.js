import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class GalleryImage extends Component {
	constructor(props) {
		super(props);
		const { uri, name, isSelected } = this.props;
		this.state = { uri, name, isSelected, multiSelectMode: false, iconChecked: false };
	}

	toggleImageSelection = () => {
		this.setState({ isSelected: !this.state.isSelected });
	}

	toggleGridSelection = () => {
		this.setState({ multiSelectMode: !this.state.multiSelectMode });
	}

	checkBoxSelection = () => {
		const { uri, iconChecked } = this.state;

		this.setState({ iconChecked: !iconChecked }, () => {
			if(iconChecked) {
				this.props.selectImage(uri);
			} else {
				this.props.disselectImage(uri);
			}
		});
	}

	checkMultiSelection = () => {
		const { multiSelectMode, uri, iconChecked } = this.state;

		if(multiSelectMode) {
			return (<Icon
				name={iconChecked ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"}
				size={20}
				color="#81c04d"
				onPress={() => this.checkBoxSelection()}/>);
		} else {
			return (<Button onPress={() => this.props.saveImage(uri)} title="Save" style={styles.saveButton}/>)
		}
	}

	render() {
		const { uri, name, isSelected } = this.state;
		const { container, selected, normal, text } = styles;

		return (
			<TouchableOpacity
				style={container}
				activeOpacity={0.7}
				onPress={() => this.toggleImageSelection()}
				onLongPress={() => this.props.toggleGridSelection()}>
				<ImageBackground source={{ uri }} style={[imgStyle, isSelected ? selected : normal]}>
					{isSelected && <Text style={text}>{name}</Text>}
					{this.checkMultiSelection()}
				</ImageBackground>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width / 3,
		flexDirection: 'column' 
	},
	imgStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	normal: {
		opacity: 1
	},
	selected: {
		opacity: 0.7
	},
	text: {
		color: '#d4d4c9'
	},
	saveButton: {
		backgroundColor: 'transparent',
		color: '#d4d4c9'
	}
});

export default GalleryImage;