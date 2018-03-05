import { LOADING, API_CALL } from '../../actions/gallery/actionTypes';

export default function imageGridReducer(images = [], action = {}) {
	switch(action.type) {
		case API_CALL:
			return action.images.map(({ name, image_url, image_format }) => ({ name, uri: image_url[0], format: image_format }));
		default:
			return images;
	}
}