import { actionTypes } from "../action-types";
import { Action } from "../actions";
const currentChatId = 0;

const currentChat = (state = currentChatId, action: Action) => {
  switch (action.type) {
    case actionTypes.CURRENTCHAT:
      return action.payload;
    default:
      return state;
  }
};

export default currentChat;
