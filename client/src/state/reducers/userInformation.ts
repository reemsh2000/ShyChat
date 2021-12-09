import { actionTypes } from "../action-types";
const initialState = { 
    id: 0, phoneNumber: '',name:'',bio:'',photo:''
}
const userInfromation = (state = initialState, action:any) => {
  switch (action.type) {
    case actionTypes.USERDATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default userInfromation;
