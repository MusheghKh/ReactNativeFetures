import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import todoReducers from './reducers/todo';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(combineReducers({ ...todoReducers /*, TODO: Add for other Screens here too */ }));

export default store;

export const RealmSchemas = {
	TodoListSchema: [{ name: 'TodoItem', properties: { id: 'string', name: 'string', completed: 'boolean' }}]
}