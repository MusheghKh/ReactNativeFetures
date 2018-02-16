import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import todoReducers from './reducers/todo';
import galleryReducers from './reducers/gallery';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger, ReduxThunk)(createStore);
const store = createStoreWithMiddleware(combineReducers({ ...todoReducers, ...galleryReducers }));

export default store;

export const RealmSchemas = [
	{
		name: 'TodoItem',
		primaryKey: 'id',
		properties: {
			id: { type: 'string', indexed: true },
			name: 'string',
			completed: { type: 'bool', default: false }
		}
	},
	{
		name: 'BackgroundTasksPlanning',
		primaryKey: 'id',
		properties: {
			id: { type: 'string', indexed: true },
			action: 'data',
			callback: 'data',
			date: 'date?',
			period: 'int?',
			timeout: 'int?'
		}
	}
]