const connection = require('../../config/connection');

const checkExistChat = (senderId, receiverPhone) => connection.query(
  'select *  from (SELECT chatId FROM chatparticipant inner join users on(users.id=chatparticipant.userId) WHERE (chatparticipant.userId=$1)or(users.phone=$2)) chatsIds GROUP BY  chatsIds.chatId HAVING COUNT(chatsIds.chatid) > 1',
  [senderId, receiverPhone],
);

module.exports = checkExistChat;
