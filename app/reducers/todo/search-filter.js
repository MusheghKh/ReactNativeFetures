import { SEARCH_FILTER, SET_VISIBILITY_FILTER } from '../../actions/todo/actionTypes';

export default function searchFilterReducer(searchInput = '', action = {}) {
	switch(action.type) {
		case SEARCH_FILTER:
			return action.input.toLowerCase();
		default:
			return searchInput;
	}
}