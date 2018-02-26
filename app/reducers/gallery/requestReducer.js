import { LOADING, API_CALL } from '../../actions/gallery/actionTypes';

export default function requestReducer(images = [], action = {}) {
	switch(action.type) {
		case API_CALL:
			return action.images.map(({ name, image_url }) => ({ name, uri: image_url[0] }));
		default:
			return images;
	}
}