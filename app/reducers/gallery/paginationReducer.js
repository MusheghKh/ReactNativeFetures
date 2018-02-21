import { SELECT_PAGE, GET_PAGE_COUNT, SLIDE_PAGE_SETUP } from '../../actions/gallery/actionTypes';

export function paginationReducer(pages = { page: 1, pageCount: 1 }, action = {}) {
	const { page, pageCount, type, count } = action;
	const sliderPage = type === SLIDE_PAGE_SETUP && (pages.pageCount > (10**count + pages.page) && 10**count + pages.page || pages.pageCount);

	switch(type) {
		case SELECT_PAGE:
			return { page, pageCount: pages.pageCount };
		case GET_PAGE_COUNT:
			return { page: pages.page, pageCount };
		case SLIDE_PAGE_SETUP:
			return { page: sliderPage, pageCount: pages.pageCount };
		default:
			return pages;
	}
}