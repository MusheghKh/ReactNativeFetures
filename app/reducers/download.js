import { DOWNLOAD } from '../actions/globalActionTypes';

export default function downloadReducer(download = false, action = {}) {
	return action.type === DOWNLOAD;
}