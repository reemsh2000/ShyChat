const connection = require('../../config/connection');

const getChatMessages = (senderId, receiverId) => connection.query(
  'select * from message where chatId in (SELECT chatId FROM chatparticipant WHERE (chatparticipant.userId=$1)or(chatparticipant.userId=$2)  GROUP BY  chatparticipant.chatid HAVING COUNT(chatparticipant.chatid) > 1)',
  [senderId, receiverId],
);

module.exports = getChatMessages;
