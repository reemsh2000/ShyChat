import { combineReducers } from 'redux';
import isLogged from './isLoggoed';

const reducers = combineReducers({
    isLogged,
})

export default reducers;

export type State = ReturnType< typeof reducers>