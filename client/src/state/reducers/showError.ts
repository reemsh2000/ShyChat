import { actionTypes } from "../action-types";
const errorInitialState = {errState:false, errMessage: ''}; 
const showErr = (state = errorInitialState, action: any) => {
  switch (action.type) {
    case actionTypes.SHOWERROR:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default showErr;
