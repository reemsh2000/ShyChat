import { Action } from "./../actions/index";
import { actionTypes, User } from "./../action-types/index";
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
export const setUserData = (payload:any) => {
  return {
    type: actionTypes.USERDATA,
    payload,
  }

}
export const getUserData = (user: User): Function => {
  return (dispatch: Dispatch) => {
    dispatch(setUserData({
      id: user.id,
      phoneNumber: user.phoneNumber,
    }));
  };
};
