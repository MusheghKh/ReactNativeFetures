import { SELECT_GRID, SAVE_IMAGE, SELECT_IMAGE, DISSELECT_IMAGE, SAVE_IMAGES } from './actionTypes';
import { asyncDispatcher } from '../../helpers/RealmDB';
import RNFS from 'react-native-fs';

export const selectGrid = () => { type: SELECT_GRID }

export const disselectGrid = () => { type: DISSELECT_GRID }

export const selectImage = uri => { type: SELECT_IMAGE, uri }

export const disselectImage = uri => { type: DISSELECT_IMAGE, uri }

export const saveImage = uri => {
	// TODO: use asyncDispatcher and sort out how to save image(s)
}

export const saveImages = selectedUris => {
	// TODO: use asyncDispatcher and sort out how to save image(s)
}