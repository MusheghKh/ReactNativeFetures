import { SELECT_NEW_FEATURE, featureGroups } from '../../actions/gallery/actionTypes';

export function featureReducer(feature = featureGroups.POPULAR, action = {}) {
	switch(action.type) {
		case SELECT_NEW_FEATURE:
			return action.feature;
		default:
			return feature;
	}
}