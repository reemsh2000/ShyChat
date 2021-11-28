import { combineReducers } from 'redux';
import isLogged from './isLoggoed';
import userInfromation from './userInformation';
import showErr from './showError';


const reducers = combineReducers({
    isLogged, userInfromation, showErr
})

export default reducers;

export type State = ReturnType< typeof reducers>