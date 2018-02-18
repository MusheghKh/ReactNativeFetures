import { SELECT_NEW_FEATURE, featureGroups } from './actionTypes';

export function selectPopular() {
	return {
		type: SELECT_NEW_FEATURE,
		feature: featureGroups.POPULAR
	}
}

export function selectHighestRated() {
	return {
		type: SELECT_NEW_FEATURE,
		feature: featureGroups.HIGHEST_RATED
	}
}

export function selectUpcoming() {
	return {
		type: SELECT_NEW_FEATURE,
		feature: featureGroups.UPCOMING
	}
}

export function selectEditors() {
	return {
		type: SELECT_NEW_FEATURE,
		feature: featureGroups.EDITORS
	}
}

export function selectFreshToday() {
	return {
		type: SELECT_NEW_FEATURE,
		feature: featureGroups.FRESH_TODAY
	}
}

export function selectFreshYesterday() {
	return {
		type: SELECT_NEW_FEATURE,
		feature: featureGroups.FRESH_YESTERDAY
	}
}

export function selectFreshWeek() {
	return {
		type: SELECT_NEW_FEATURE,
		feature: featureGroups.FRESH_WEEK
	}
}