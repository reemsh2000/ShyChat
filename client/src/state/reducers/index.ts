import { combineReducers } from 'redux';
import isLogged from './isLoggoed';
import userInfromation from './userInformation';


const reducers = combineReducers({
    isLogged, userInfromation,
})

export default reducers;

export type State = ReturnType< typeof reducers>