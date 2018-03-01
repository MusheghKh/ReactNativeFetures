import requestReducer from './requestReducer';
import loadingReducer from '../loading';
import paginationReducer from './paginationReducer';
import navBarReducer from './navBarReducer';
import imageReducer from './imageReducer';

export default {
	images: requestReducer,
	loading: loadingReducer,
	pages: paginationReducer,
	navBar: navBarReducer,
	selectedUris: imageReducer 
}