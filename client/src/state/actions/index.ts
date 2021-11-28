
import { actionTypes } from '../action-types';

interface loginAction {
    type: actionTypes.LOGIN
}

interface logoutAction {
    type: actionTypes.LOGOUT
}

interface userDataAction {
    type: actionTypes.USERDATA,
    id: number,
    phoneNumber: string
}

interface showError {
    type: actionTypes.SHOWERROR,
}
export type Action = loginAction | logoutAction | userDataAction | showError;
