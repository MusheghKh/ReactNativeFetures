import requestReducer from './requestReducer';
import loadingReducer from '../loadingReducer';
import featureReducer from './featureReducer';

export default {
	images: requestReducer,
	loading: loadingReducer
	feature: featureReducer
}