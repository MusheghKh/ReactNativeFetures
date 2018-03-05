import imageGridReducer from './imageGridReducer';
import loadingReducer from '../loading';
import downloadReducer from '../download';
import paginationReducer from './paginationReducer';
import navBarReducer from './navBarReducer';
import imageReducer from './imageReducer';

export default {
	images: imageGridReducer,
	loading: loadingReducer,
	isDownloading: downloadReducer,
	pages: paginationReducer,
	navBar: navBarReducer,
	selectedImages: imageReducer 
}