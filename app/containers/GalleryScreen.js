import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as imageGridActions from '../actions/gallery/imageGridActions';
import * as navBarActions from '../actions/gallery/navBarActions';
import * as paginationActions from '../actions/gallery/paginationActions';
import { saveImages } from '../actions/gallery/imageActions';
import { featureGroups } from '../actions/gallery/actionTypes';
import NavBar from '../components/gallery/nav-bar';
import ImageGrid from '../components/gallery/image-grid';
import Pagination from '../components/gallery/pagination';
import store from '../store';

@connect(({ loading, images, pages, navBar, selectedImages, isDownloading }) => ({ loading, images, pages, navBar, selectedImages, isDownloading }))

class GalleryScreen extends Component {
	render() {
		const { loading, images, pages, navBar, selectedImages, isDownloading, dispatch } = this.props;
		const { feature, searchKey } = navBar;

		return (
			<View style={styles.container}>
				<NavBar
					activeTab={feature}
					searchKey={searchKey}
					features={featureGroups}
					saveMode={!!selectedImages.length}
					saveAllSelections={() => dispatch(saveImages(selectedImages))}
					{...bindActionCreators(navBarActions, dispatch)} />
				<ImageGrid
					images={images}
					pages={pages}
					searchKey={searchKey}
					feature={feature}
					loading={loading}
					isDownloading={isDownloading}
					dispatch={dispatch}
					{...bindActionCreators(imageGridActions, dispatch)} />
				<Pagination
					pages={pages}
					{...bindActionCreators(paginationActions, dispatch)} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width
  }
});

export default GalleryScreen;