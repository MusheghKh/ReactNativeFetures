import { SELECT_NEW_FEATURE, featureGroups } from './actionTypes';

export function selectFeature(feature) {
	return {
		type: SELECT_NEW_FEATURE,
		feature
	}
}

export function search(keyword) {
	// TODO :'(
}