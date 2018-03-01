import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { bindActionCreators, dispatch } from 'redux';
import { connect } from 'react-redux';
import * as requestActions from '../actions/gallery/requestActions';
import * as navBarActions from '../actions/gallery/navBarActions';
import * as paginationActions from '../actions/gallery/paginationActions';
import { featureGroups } from '../actions/gallery/actionTypes';
import NavBar from '../components/gallery/nav-bar';
import ImageGrid from '../components/gallery/image-grid';
import Pagination from '../components/gallery/pagination';
import store from '../store';

@connect(({ loading, images, pages, navBar, selectedUris }) => ({ loading, images, pages, navBar, selectedUris }))

class GalleryScreen extends Component {
	render() {
		const { loading, images, pages, navBar, selectedUris, dispatch } = this.props;
		const { feature, searchKey } = navBar;

		return (
			<View style={styles.container}>
				<NavBar
					activeTab={feature}
					searchKey={searchKey}
					features={featureGroups}
					{...bindActionCreators(navBarActions, dispatch)} />
				<ImageGrid
					images={images}
					pages={pages}
					searchKey={searchKey}
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