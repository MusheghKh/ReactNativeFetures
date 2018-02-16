import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

const URL = 'https://api.500px.com/v1/photos';
const CONSUMER_KEY = '5NEaRSLd0twDCl8uNLDN7cePwjNGuqW2XlvoA88j';
const SORTING = 'highest_rating';

fetch(`${URL}/search?term=${keyword}&page=${page}&rpp=20&image_size=440&sort=${SORTING}&consumer_key=${CONSUMER_KEY}`);

@connect(({ loading, images, page, sorting }) => ({
	loading,
	images,
	page,
	sorting
}))

class Gallery extends Component {
	render() {
		const { loading, images } = this.props;

		return (
			<View>
				{images.map(({ uri }) => <Image source={{uri}}/>)}
			</View>
		)
	}
}