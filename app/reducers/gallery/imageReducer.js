import { SELECT_GRID, SELECT_IMAGE, DISSELECT_IMAGE, SAVE_IMAGE, SAVE_IMAGES } from '../../actions/gallery/actionTypes';
import { Alert } from 'react-native';

export function imageReducer(selectedUris = [], action = {}) {
	const { type, uri } = action;
	const index = selectedUris.find(selectedUri => selectedUri === uri);

	switch(type) {
		case SELECT_IMAGE:
			return selectedUris.concat(uri);
		case DISSELECT_IMAGE:
			return !!selectedUris.splice(index, 1).length && selectedUris;
		case SAVE_IMAGE:
		case SAVE_IMAGES:
			Alert.alert('Image(s) successfully saved.');
			return [];
		case DISSELECT_GRID:
			return [];
		case SELECT_GRID:
		default:
			return selectedUris;
	}
}