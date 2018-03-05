import { SELECT_GRID, DISSELECT_GRID, SELECT_IMAGE, DISSELECT_IMAGE, SAVE_IMAGE, SAVE_IMAGES } from '../../actions/gallery/actionTypes';
import { Alert } from 'react-native';

export default function imageReducer(selectedImages = [], action = {}) {
	const { type, uri, img } = action;
	const index = selectedImages.find(({ uri }) => uri === uri);

	switch(type) {
		case SELECT_IMAGE:
			return selectedImages.concat(img);
		case DISSELECT_IMAGE:
			return !!selectedImages.splice(index, 1).length && selectedImages.slice();
		case SAVE_IMAGE:
		case SAVE_IMAGES:
			Alert.alert('Image(s) successfully saved.');
			return [];
		case DISSELECT_GRID:
			return [];
		case SELECT_GRID:
		default:
			return selectedImages;
	}
}