import { LOADING } from '../../actions/globalActionTypes';

export default function loadingReducer(loading = false, action = {}) {
	return action.type === LOADING;
}