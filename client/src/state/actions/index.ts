import { actionTypes } from '../action-types';

interface loginAction {
    type: actionTypes.LOGIN
}

interface logoutAction {
    type: actionTypes.LOGOUT
}

export type Action = loginAction | logoutAction;
