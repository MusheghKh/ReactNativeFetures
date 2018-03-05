import { SELECT_NEW_FEATURE, featureGroups, SEARCH_ON_SUBMIT } from '../../actions/gallery/actionTypes';

export default function navBarReducer(navBar = { feature: featureGroups.POPULAR, searchKey: '' }, action = {}) {
	const { type, feature, searchKey } = action;
	debugger;
	switch(type) {
		case SELECT_NEW_FEATURE:
			return { feature, searchKey: navBar.searchKey }
		case SEARCH_ON_SUBMIT:
			return { feature: navBar.feature, searchKey }
		default:
			return navBar;
	}
}