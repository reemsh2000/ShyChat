import { actionTypes } from "../action-types";
const errorInitialState = false; 
const showErr = (state = errorInitialState, action: any) => {
  console.log(action, state)
  switch (action.type) {
    case actionTypes.SHOWERROR:
      return action.payload;
    default:
      return state;
  }
};

export default showErr;
