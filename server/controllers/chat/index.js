const {
  addNewParticipant, checkExistChat, createNewChat, checkPhoneQuery,
} = require('../../database/queries');

const createChat = async (senderId, receiverPhone, socket) => {
  try {
    const { rows: userChats, rowCount } = await checkExistChat(senderId, receiverPhone);
    if (rowCount) {
      socket.chatId = userChats[0].chatid;
      socket.join(userChats[0].chatid);
    } else {
      const { rows: userInfo } = await checkPhoneQuery(receiverPhone);
      const { rows: chatInfo } = await createNewChat();
      socket.chatId = chatInfo[0].id;
      socket.join(chatInfo[0].id);
      await addNewParticipant(senderId, chatInfo[0].id);
      await addNewParticipant(userInfo[0].id, chatInfo[0].id);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
module.exports = createChat;
