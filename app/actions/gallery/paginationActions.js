import { SELECT_PAGE, GET_PAGE_COUNT, SLIDE_PAGE_SETUP } from './actionTypes';

export function selectPage(page) {
	return {
		type: SELECT_PAGE,
		page
	}
}

export function getPageCount(pageCount) {
	return {
		type: GET_PAGE_COUNT,
		pageCount
	}
}

export function slidePageSetup(arrow, count) {
	return {
		type: SLIDE_PAGE_SETUP,
		count: arrow === '<' ?  -count : count
	}
}