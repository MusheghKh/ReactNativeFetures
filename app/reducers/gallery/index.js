import requestReducer from './requestReducer';
import loadingReducer from '../loadingReducer';
import paginationReducer from './paginationReducer';
import featureReducer from './featureReducer';

export default {
	images: requestReducer,
	loading: loadingReducer,
	page: paginationReducer,
	feature: featureReducer
}