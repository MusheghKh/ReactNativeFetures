import * as actions from './actionTypes';
import createGUID from '../../helpers/createGUID';
import RealmDB, { asyncDispatcher } from '../../helpers/RealmDB';

export function addTodo(name, completed = false) {
  return asyncDispatcher(dispatch => {
    RealmDB.save('TodoItem', { id: createGUID(), name, completed }).then(todo => {
      dispatch({ type: actions.ADD, todo });
    });
  });
}

export function completeTodo(todoId) {
  return asyncDispatcher(dispatch => {
    RealmDB.edit('TodoItem', todoId, 'completed', true).then(id => {
      dispatch({ type: actions.COMPLETE, id });
    });
  }, false);
}

export function incompleteTodo(todoId) {
  return asyncDispatcher(dispatch => {
    RealmDB.edit('TodoItem', todoId, 'completed', false).then(id => {
      dispatch({ type: actions.INCOMPLETE, id });
    });
  }, false);
}

export function removeTodo(todoId) {
  return asyncDispatcher(dispatch => {
    RealmDB.remove('TodoItem', todoId).then(id => {
      dispatch({ type: actions.REMOVE, id });
    });
  });
}

export function getAllTodos() {
  return asyncDispatcher(dispatch => {
    RealmDB.findAll('TodoItem').then(todos => { 
      todos = todos.map(({ id, name, completed }) => ({ id, name, completed }));
      dispatch({ type: actions.ADD_ALL, todos });
    });
  });
}

export function searchFilter(input) {
  return { type: actions.SEARCH_FILTER, input }
}