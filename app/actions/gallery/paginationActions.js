import { SELECT_PAGE, GET_PAGE_COUNT } from './actionTypes';

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