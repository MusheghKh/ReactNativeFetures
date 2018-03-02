import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import GalleryImage from './image';
import { bindActionCreators } from 'redux';
import * as imageActions from '../../actions/gallery/imageActions';
import LoadingSpinner from '../../helpers/loading-spinner';

class ImageGrid extends Component {
	constructor(props) {
		super(props);
		const { images, loading, feature, pages, searchKey } = this.props;

		this.state = { images, loading, feature, pages, searchKey, multiSelectMode: false }
	}

	componentWillReceiveProps(nextProps) {
		const { images, loading, feature, pages, searchKey, sendRequest } = nextProps;
		const searchValueChange = this.state.searchKey !== searchKey;
		this.setState({ loading }, () => images.length && this.setState({ images }));
		if(this.state.pages.page !== pages.page || this.state.feature !== feature || searchValueChange) {
			this.setState({ pages, feature, searchKey, multiSelectMode: false }, () => {
				imageActions.disselectGrid();
				sendRequest(searchKey, pages.page, feature, pages.pageCount == null || searchValueChange);
			});
		}
	}

	componentDidMount() {
		const { pages, feature, searchKey, loading, sendRequest } = this.props;
		sendRequest(searchKey, pages.page, feature, pages.pageCount);
		this.setState({ loading });
	}

	render() {
		const { images, loading, multiSelectMode } = this.state;
		const { dispatch } = this.props;
		const { container, image } = styles;

		return (
			<ScrollView contentContainerStyle={container}>
				{loading && <LoadingSpinner loading={loading}/>}
				{!loading && images.map(({ uri, name }, index) => (<GalleryImage
					key={`${name}${index}`}
					style={image}
					uri={uri}
					isSelected={multiSelectMode}
					name={name}
					toggleGridSelection={(multiSelectMode, callback) => this.setState({ multiSelectMode }, callback)}
					{...bindActionCreators(imageActions, dispatch)}/>))}
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