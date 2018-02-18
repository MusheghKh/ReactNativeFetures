import { LOADING, API_CALL } from '../../actions/gallery/actionTypes';

export default function requestReducer(images = [], action = {}) {
	switch(action.type) {
		case API_CALL:
			return images.map(({ name, image_url }) => ({ name, uri: image_url }));
		default:
			return images;
	}
}