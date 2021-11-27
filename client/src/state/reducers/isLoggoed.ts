import { actionTypes } from "../action-types";
import { Action } from "../actions";
const initialValue = false;
const isLogged = (state = initialValue, action: Action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return true;
    case actionTypes.LOGOUT:
      return false;
    default:
      return state;
  }
};

export default isLogged;
