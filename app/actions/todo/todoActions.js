import * as actions from './actionTypes';
import createGUID from '../../helpers/createGUID';

export function addTodo(name, completed) {
  return {
    type: actions.ADD,
    todo: {
      id: createGUID(),
      name,
      completed
    }
  };
}

export function completeTodo(id) {
  return {
    type: actions.COMPLETE,
    id
  };
}

export function incompleteTodo(id) {
  return {
    type: actions.INCOMPLETE,
    id
  };
}