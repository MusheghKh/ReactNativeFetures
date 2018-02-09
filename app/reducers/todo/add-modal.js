import * as actions from '../../actions/todo/actionTypes';

const initialState = {
  visible: false
};

export default function addModalVisibilityReducer (state = initialState, action = {}) {
  switch(action.type) {
    case actions.SET_ADD_MODAL_VISIBILITY:
    case actions.SET_HIDE_MODAL_VISIBILITY:
      return {
        ...state,
        visible: action.visible
      };
    default:
      return state;
  }
}