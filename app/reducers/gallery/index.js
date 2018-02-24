import requestReducer from './requestReducer';
import loadingReducer from '../loading';
import paginationReducer from './paginationReducer';
import featureReducer from './featureReducer';
import imageReducer from './imageReducer';

export default {
	images: requestReducer,
	loading: loadingReducer,
	pages: paginationReducer,
	feature: featureReducer,
	selectedUris: imageReducer 
}