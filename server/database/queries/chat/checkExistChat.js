const connection = require('../../config/connection');

const checkExistChat = (senderId, receiverId) => connection.query(
  'select *  from (SELECT chatId FROM chatparticipant  WHERE (chatparticipant.userId=$1)or(chatparticipant.userId=$2)) chatsIds GROUP BY  chatsIds.chatId HAVING COUNT(chatsIds.chatid) > 1',
  [senderId, receiverId],
);

module.exports = checkExistChat;
