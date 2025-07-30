
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
    email: string
}

interface showError {
    type: actionTypes.SHOWERROR,
}

interface setCurrentChat {
    type: actionTypes.CURRENTCHAT,
    payload: number,
}
export type Action = loginAction | logoutAction | userDataAction | showError | setCurrentChat;
