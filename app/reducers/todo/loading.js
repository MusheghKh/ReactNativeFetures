import { LOADING } from '../../actions/todo/actionTypes';

export default function loadingReducer(loading = false, action = {}) {
	return action.type === LOADING;
}