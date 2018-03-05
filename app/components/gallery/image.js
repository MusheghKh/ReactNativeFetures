import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingSpinner from '../../helpers/loading-spinner';

class GalleryImage extends Component {
	constructor(props) {
		super(props);
		const { uri, name, imgFormat, isSelected, isDownloading } = this.props;
		this.state = { uri, name, imgFormat, isSelected, isDownloading, multiMode: false, iconChecked: false };
	}

	toggleImageSelection = () => {
		this.setState({ isSelected: !this.state.isSelected });
	}

	componentWillReceiveProps({ isSelected, isDownloading }) {
		this.setState({ isSelected, isDownloading }, () => this.setState({ multiMode: isSelected }, () => {
			!this.state.multiMode && this.setState({ iconChecked: false });
		}));
	}

	checkBoxSelection = () => {
		const { uri, name, imgFormat, iconChecked } = this.state;

		this.setState({ iconChecked: !iconChecked }, () => {
			if(!iconChecked) {
				this.props.selectImage({uri, name, imgFormat});
			} else {
				this.props.disselectImage(uri);
			}
		});
	}

	checkMultiSelection = () => {
		const { multiMode, uri, name, imgFormat, iconChecked, isSelected } = this.state;

		if(multiMode) {
			return (<Icon
				name={iconChecked ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"}
				size={30}
				color="#0099CC"
				onPress={() => this.checkBoxSelection()}/>);
		} else if(isSelected) {
			return (<Button color='#81c04d' onPress={() => this.props.saveImage({uri, name, imgFormat})} title="Save" style={styles.saveButton}/>)
		}
	}

	render() {
		const { style, selectGrid, disselectGrid } = this.props;
		const { uri, name, isSelected, iconChecked, multiMode, isDownloading } = this.state;
		const { container, selected, normal, text, imgStyle, spinner } = styles;

		return (
			<TouchableOpacity
				style={[container, style]}
				activeOpacity={0.7}
				onPress={() => !multiMode && this.toggleImageSelection()}
				onLongPress={() => this.props.toggleGridSelection(!isSelected, !isSelected ? selectGrid : disselectGrid)}>
				<ImageBackground source={{ uri }} style={[imgStyle, isSelected ? selected : normal]} blurRadius={isSelected ? 2 : 0}>
					{isDownloading && (iconChecked || isSelected) && <LoadingSpinner loading={!isDownloading} size='small' color='#0099CC'/>}
					{!isDownloading && isSelected && <Text style={text}>{name}</Text>}
					{!isDownloading && this.checkMultiSelection()}
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