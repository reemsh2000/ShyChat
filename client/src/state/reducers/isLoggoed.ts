import { actionTypes } from "../action-types";
import { Action } from "../actions";

const isLogged = (state: boolean = false, action: Action) => {
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
