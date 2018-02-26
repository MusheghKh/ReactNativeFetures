import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
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

@connect(({ loading, images, pages, feature, selectedUris }) => ({ loading, images, pages, feature, selectedUris }))

class GalleryScreen extends Component {
	render() {
		const { loading, images, pages, feature, selectedUris, dispatch } = this.props;

		return (
			<View style={styles.container}>
				<NavBar
					activeTab={feature}
					features={featureGroups}
					{...bindActionCreators(featureActions, dispatch)} />
				<ImageGrid
					images={images}
					pages={pages}
					feature={feature}
					selectedUris={selectedUris}
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
    width: Dimensions.get('window').width
  }
});

export default GalleryScreen;