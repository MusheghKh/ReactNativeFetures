import { SEARCH_FILTER } from '../../actions/todo/actionTypes';

export default function searchFilterReducer(searchInput = '', action = {}) {
	return action.type === SEARCH_FILTER && action.input.toLowerCase() || '';
}