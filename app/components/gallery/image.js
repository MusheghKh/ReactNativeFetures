import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class GalleryImage extends Component {
	constructor(props) {
		super(props);
		const { uri, name, isSelected } = this.props;
		this.state = { uri, name, isSelected, multiMode: false, iconChecked: false };
	}

	toggleImageSelection = () => {
		this.setState({ isSelected: !this.state.isSelected });
	}

	componentWillReceiveProps(nextProps) {
		const { isSelected } = nextProps;
		this.setState({ isSelected }, () => this.setState({ multiMode: isSelected }, () => {
			!this.state.multiMode && this.setState({ iconChecked: false });
		}));
	}

	checkBoxSelection = () => {
		const { uri, iconChecked } = this.state;

		this.setState({ iconChecked: !iconChecked }, () => {
			if(!iconChecked) {
				this.props.selectImage(uri);
			} else {
				this.props.disselectImage(uri);
			}
		});
	}

	checkMultiSelection = () => {
		const { multiMode, uri, iconChecked, isSelected } = this.state;

		if(multiMode) {
			return (<Icon
				name={iconChecked ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"}
				size={30}
				color="#0099CC"
				onPress={() => this.checkBoxSelection()}/>);
		} else if(isSelected) {
			return (<Button color='#81c04d' onPress={() => this.props.saveImage(uri)} title="Save" style={styles.saveButton}/>)
		}
	}

	render() {
		const { style, selectGrid, disselectGrid } = this.props;
		const { uri, name, isSelected, multiMode } = this.state;
		const { container, selected, normal, text, imgStyle } = styles;

		return (
			<TouchableOpacity
				style={[container, style]}
				activeOpacity={0.7}
				onPress={() => !multiMode && this.toggleImageSelection()}
				onLongPress={() => this.props.toggleGridSelection(!isSelected, !isSelected ? selectGrid : disselectGrid)}>
				<ImageBackground source={{ uri }} style={[imgStyle, isSelected ? selected : normal]} blurRadius={isSelected ? 2 : 0}>
					{isSelected && <Text style={text}>{name}</Text>}
					{this.checkMultiSelection()}
				</ImageBackground>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column'
	},
	imgStyle: {
		flex: 1,
		flexDirection: 'column', 
		justifyContent: 'center',
		alignItems: 'center' 
	},
	normal: {
		opacity: 1
	},
	selected: {
		opacity: 0.5
	},
	text: {
		marginBottom: 10,
		color: '#383838',
		opacity: 1
	},
	saveButton: {
		backgroundColor: 'transparent'
	}
});

export default GalleryImage;