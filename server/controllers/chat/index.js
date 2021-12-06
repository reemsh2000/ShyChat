const {
  addNewParticipant, checkExistChat, createNewChat,
} = require('../../database/queries');

const createChat = async (senderId, receiverId, socket) => {
  try {
    const { rows: userChats, rowCount } = await checkExistChat(senderId, receiverId);
    if (rowCount) {
      socket.chatId = userChats[0].chatid;
      socket.join(userChats[0].chatid);
    } else {
      const { rows: chatInfo } = await createNewChat();
      socket.chatId = chatInfo[0].id;
      socket.join(chatInfo[0].id);
      await addNewParticipant(senderId, chatInfo[0].id);
      await addNewParticipant(receiverId, chatInfo[0].id);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
module.exports = createChat;
