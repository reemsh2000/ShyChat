import { Action } from './../actions/index';
import { actionTypes } from "./../action-types/index";
import { Dispatch } from "redux";


export const logIn = (): Function => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.LOGIN,
    });
  };
};

export const logout = (): Function => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: actionTypes.LOGOUT,
      });
    };
  };
  