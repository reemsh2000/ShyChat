import { combineReducers } from 'redux';
import isLogged from './isLoggoed';
import userInfromation from './userInformation';
import showErr from './showError';
import currentChat from './currentChatId';

const reducers = combineReducers({
    isLogged, userInfromation, showErr, currentChat,
})

export default reducers;

export type State = ReturnType< typeof reducers>
