import * as actions from './actionTypes';
import createGUID from '../../helpers/createGUID';
import RealmDB from '../../helpers/RealmDB';

export function addTodo(name, completed = false) {
  return dispatch => {
    RealmDB.save('TodoItem', { id: createGUID(), name, completed }).then(todo => {
      dispatch({ type: actions.ADD, todo: todo[0] });
    });
  }
}

export function completeTodo(todoId) {
  return dispatch => {
    RealmDB.edit('TodoItem', todoId, 'completed', true).then(id => {
      dispatch({ type: actions.COMPLETE, id: id[0] });
    });
  }
}

export function incompleteTodo(todoId) {
  return dispatch => {
    RealmDB.edit('TodoItem', todoId, 'completed', false).then(id => {
      dispatch({ type: actions.INCOMPLETE, id: id[0] });
    });
  }
}

export function removeTodo(todoId) {
  return dispatch => {
    RealmDB.remove('TodoItem', todoId).then(id => {
      dispatch({ type: actions.REMOVE, id: id[0] });
    });
  }
}

export function getAllTodos() {
  return dispatch => {
    RealmDB.findAll('TodoItem').then(todos => {
      dispatch({ type: actions.ADD_ALL, todos: todos[0] });
    });
  }
}