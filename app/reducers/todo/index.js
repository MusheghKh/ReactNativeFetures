import todoReducer from './todo';
import filterReducer from './filters';
import loadingReducer from './loading';
import searchFilterReducer from './search-filter';

export default reducers = {
	todos: todoReducer,
	filter: filterReducer,
	loading: loadingReducer,
	searchFilter: searchFilterReducer
}