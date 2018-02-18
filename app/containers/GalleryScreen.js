import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

//fetch(`${URL}/search?term=${keyword}&page=${page}&rpp=20&image_size=440&sort=${SORTING}&consumer_key=${CONSUMER_KEY}`);

@connect(({ loading, images, page, sorting }) => ({
	loading,
	images,
	page,
	sorting
}))

class GalleryScreen extends Component {
	render() {
		const { loading, images } = this.props;

		return (
			<View>
				{images.map(({ uri }) => <Image source={{uri}}/>)}
			</View>
		)
	}
}