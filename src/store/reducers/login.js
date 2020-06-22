import * as ActionTypes from '../actions/ActionTypes';
const initialState = {
  login: [],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
