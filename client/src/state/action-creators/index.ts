import { Action } from "./../actions/index";
import { actionTypes, User, Errors } from "./../action-types/index";
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
const setUserData = (payload:any) => {
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
      name:user.name,
      photo:user.photo,
      bio:user.bio
    }));
  };
};

const setErrorState = (payload:any) => {
  return {
    type: actionTypes.SHOWERROR,
    payload,
  }
}
export const handleErrorMessage = (errors:Errors): Function => {
  return (dispatch: Dispatch) => {
    dispatch(setErrorState({
      errState :errors.errState,
      errMessage: errors.errMessage,
    }));
  };
};
