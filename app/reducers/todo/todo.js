import * as actions from '../../actions/todo/actionTypes';

export default function todosReducer (todos = [], action = {}) {
  const index = todos.findIndex(todo => todo.id === action.id);

  switch (action.type) {
    case actions.ADD:
      return [...todos, action.todo];
    case actions.ADD_ALL:
      return [...action.todos];
    case actions.COMPLETE:
      if (index === -1) {
        return todos;
      }
      return [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {
          completed: true
        }),
        ...todos.slice(index + 1)
      ];
    case actions.INCOMPLETE:
      if (index === -1) {
        return todos;
      }
      return [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {
          completed: false
        }),
        ...todos.slice(index + 1)
      ];
    case actions.REMOVE:
      return todos.splice(index, 1).length && todos;
    default:
      return todos;
  }
}