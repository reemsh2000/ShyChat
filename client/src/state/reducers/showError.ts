import { actionTypes } from "../action-types";
import { Action } from "../actions";
const initialValue = false;
const showErr = (state = initialValue, action: Action) => {
  switch (action.type) {
    case actionTypes.SHOWERROR:
      return true;
    default:
      return state;
  }
};

export default showErr;
