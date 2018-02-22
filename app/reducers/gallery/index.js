import requestReducer from './requestReducer';
import loadingReducer from '../loadingReducer';
import paginationReducer from './paginationReducer';
import featureReducer from './featureReducer';
import imagesReducer from './imagesReducer';

export default {
	images: requestReducer,
	loading: loadingReducer,
	page: paginationReducer,
	feature: featureReducer,
	savings: imagesReducer 
}