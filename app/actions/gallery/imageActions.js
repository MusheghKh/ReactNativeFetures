import { SELECT_GRID, DISSELECT_GRID, SAVE_IMAGE, SELECT_IMAGE, DISSELECT_IMAGE, SAVE_IMAGES } from './actionTypes';
import { asyncDispatcher } from '../../helpers/RealmDB';
import FS from '../../helpers/fs';

export const selectGrid = () => ({ type: SELECT_GRID })

export const disselectGrid = () => ({ type: DISSELECT_GRID })

export const selectImage = uri => ({ type: SELECT_IMAGE, uri })

export const disselectImage = uri => ({ type: DISSELECT_IMAGE, uri })

export const saveImage = uri => {
	return asyncDispatcher(dispatch => {
		FS.download(uri, 'picture').then(() => dispatch({ type: SAVE_IMAGE }));
	})
}

export const saveImages = selectedUris => {
	return asyncDispatcher(dispatch => {
		FS.multiDownload(selectedUris, 'picture').then(() => dispatch({ type: SAVE_IMAGES }));
	})
}