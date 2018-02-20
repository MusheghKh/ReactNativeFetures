import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { bindActionCreators, dispatch } from 'redux';
import { connect } from 'react-redux';
import * as requestActions from '../actions/gallery/requestActions';
import * as featureActions from '../actions/gallery/featureActions';
import * as paginationActions from '../actions/gallery/paginationActions';
import { featureGroups } from '../actions/gallery/actionTypes';
import NavBar from '../components/gallery/nav-bar';
import ImageGrid from '../components/gallery/image-grid';
import Pagination from '../components/gallery/pagination';

import store from '../store';
//fetch(`${URL}/search?term=${keyword}&page=${page}&rpp=20&image_size=440&sort=${SORTING}&consumer_key=${CONSUMER_KEY}`);

@connect(({ loading, images, pages, feature }) => ({
	loading,
	images,
	pages,
	feature
}))

class GalleryScreen extends Component {
	render() {
		const { loading, images, pages, feature } = this.props;

		return (
			<View style={styles.container}>
				<NavBar
					activeTab={feature}
					features={featureGroups}
					{...bindActionCreators(featureActions, dispatch)} />
				<ImageGrid
					images={images}
					loading={loading}
					{...bindActionCreators(requestActions, dispatch)} />
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
    justifyContent: 'center'
  }
});

export default GalleryScreen;