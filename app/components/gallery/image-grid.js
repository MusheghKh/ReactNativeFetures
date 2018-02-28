import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import GalleryImage from './image';
import LoadingSpinner from '../../helpers/loading-spinner';

class ImageGrid extends Component {
	constructor(props) {
		super(props);
		const { images, loading, feature, pages } = this.props;

		this.state = { images, loading, feature, pages }
	}

	componentWillReceiveProps(nextProps) {
		const { images, loading, feature, pages, sendRequest } = nextProps;
		this.setState({ loading }, () => images.length && this.setState({ images }));
		if(this.state.pages.page !== pages.page || this.state.feature !== nextProps.feature) {
			this.setState({ pages, feature }, () => sendRequest('', pages.page, feature, pages.pageCount == null));
		}
	}

	componentDidMount() {
		const { pages, feature, loading, sendRequest } = this.props;
		sendRequest('', pages.page, feature, pages.pageCount);
		this.setState({ loading });
	}

	render() {
		const { images, loading } = this.state;
		const { container, image } = styles;

		return (
			<ScrollView contentContainerStyle={container}>
				{loading && <LoadingSpinner loading={loading}/>}
				{!loading && images.map(({ uri, name }, index) => (<GalleryImage key={index} style={image} uri={uri} name={name} />))}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row', 
		justifyContent: 'center',
		flexWrap: 'wrap',
		alignItems: 'center'
	},
	image: {
		width: Dimensions.get('window').width / 3 - 10,
		margin: 5,
		height: Dimensions.get('window').height / 6
	}
});

export default ImageGrid;