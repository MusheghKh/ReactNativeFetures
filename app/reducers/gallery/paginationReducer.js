import { SELECT_PAGE, GET_PAGE_COUNT, SLIDE_PAGE_SETUP } from '../../actions/gallery/actionTypes';

export default function paginationReducer(pages = { page: 1, pageCount: 1000 }, action = {}) {
	const { page, pageCount, type, count } = action;

	switch(type) {
		case SELECT_PAGE:
			return { page, pageCount: pages.pageCount };
		case GET_PAGE_COUNT:
			return { page: pages.page, pageCount };
		case SLIDE_PAGE_SETUP:
			if(count < 0) {
				return { page: (count + pages.page) < 1 && 1 || count + pages.page, pageCount: pages.pageCount }
			}
			if(count > 0) {
				return { page: (pages.pageCount > (count + pages.page) && count + pages.page || pages.pageCount), pageCount: pages.pageCount }
			}
		default:
			return pages;
	}
}