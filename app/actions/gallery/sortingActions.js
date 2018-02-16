import * as actions from './actionTypes';

export function selectMostPopular() {
	return {
		type: actions.SELECT_NEW_SORTING,
		sorting: actions.sortingGroups.MOST_POPULAR
	}
}

export function selectHighestRated() {
	return {
		type: actions.SELECT_NEW_SORTING,
		sorting: actions.sortingGroups.HIGHEST_RATED
	}
}

export function selectUpcoming() {
	return {
		type: actions.SELECT_NEW_SORTING,
		sorting: actions.sortingGroups.UPCOMING
	}
}

export function selectEditorsPick() {
	return {
		type: actions.SELECT_NEW_SORTING,
		sorting: actions.sortingGroups.EDITORS_PICK
	}
}

export function selectFreshToday() {
	return {
		type: actions.SELECT_NEW_SORTING,
		sorting: actions.sortingGroups.FRESH_TODAY
	}
}

export function selectFreshYesterday() {
	return {
		type: actions.SELECT_NEW_SORTING,
		sorting: actions.sortingGroups.FRESH_YESTERDAY
	}
}

export function selectFreshThisWeek() {
	return {
		type: actions.SELECT_NEW_SORTING,
		sorting: actions.sortingGroups.FRESH_THIS_WEEK
	}
}