import { SELECT_GRID, DISSELECT_GRID, SELECT_IMAGE, DISSELECT_IMAGE, SAVE_IMAGE, SAVE_IMAGES } from './actionTypes';
import { DOWNLOAD } from '../globalActionTypes';
import { asyncDispatcher } from '../../helpers/RealmDB';
import FS from '../../helpers/fs';

export const selectGrid = () => ({ type: SELECT_GRID })

export const disselectGrid = () => ({ type: DISSELECT_GRID })

export const selectImage = img => ({ type: SELECT_IMAGE, img })

export const disselectImage = uri => ({ type: DISSELECT_IMAGE, uri })

export const saveImage = image => {
	return asyncDispatcher(dispatch => {
		FS.download(image, 'picture').then(() => dispatch({ type: SAVE_IMAGE }));
	}, { type: DOWNLOAD })
}

export const saveImages = selectedImages => {
	return asyncDispatcher(dispatch => {
		FS.multiDownload(selectedImages, 'picture').then(() => dispatch({ type: SAVE_IMAGES }));
	}, { type: DOWNLOAD })
}