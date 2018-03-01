import { SELECT_NEW_FEATURE, SEARCH_ON_SUBMIT } from './actionTypes';

export function selectFeature(feature) {
	return {
		type: SELECT_NEW_FEATURE,
		feature
	}
}

export function search(searchKey) {
	return {
		type: SEARCH_ON_SUBMIT,
		searchKey
	}
}