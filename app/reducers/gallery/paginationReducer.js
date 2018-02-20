import { SELECT_PAGE, GET_PAGE_COUNT } from '../../actions/gallery/actionTypes';

export function paginationReducer(pages = { page: 1, pageCount: 1 }, action = {}) {
	const { page, pageCount, type } = action;

	switch(type) {
		case SELECT_PAGE:
			return { page, pageCount: pages.pageCount };
		case GET_PAGE_COUNT:
			return { page: pages.page, pageCount };
		default:
			return pages;
	}
}