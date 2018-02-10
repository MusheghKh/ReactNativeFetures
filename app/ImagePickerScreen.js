import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Button,
    Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class ImagePickerScreen extends Component{
	state = {
		background: '',
	};
	imagePickerOptions = {
		title: 'Select Background',
		customButtons: [
			{name: 'custom_button_name', title: 'Choose Photo from...(Custom)'},
		],
		storageOptions: {
			skipBackup: true,
			path: "images",
		}
	};

	pickImage = (options) => {
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);
			if (response.didCancel) {
    			console.log('User cancelled image picker');
  			} else if(response.error){
  				console.log('ImagePicker Error: ', response.error);
  			} else if(response.customButton){
  				Alert.alert('custom button clicked', response.customButton);
  			} else {
  				let source = { uri: response.uri };
  				this.setState({
  					background: source
  				});
  			}
		})
	}

	render(){
		return (
			<View style={styles.container}>
				<Image
					style={styles.backgroundImage}
					// FIXME warning on source prop
					source={this.state.background }
				/>
				<Button
					color="grey"
					title="Touch me tiger"
					onPress={ () => this.pickImage(this.imagePickerOptions) }
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	//TODO make image full scaled
	backgroundImage: {
		backgroundColor: '#eee',
		flex: 1,
		resizeMode: 'cover',
		position: 'absolute',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
	}
});

export default ImagePickerScreen;