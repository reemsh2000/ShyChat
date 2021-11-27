const connection = require('../../config/connection');

const addNewMessage = (userId, content, time, chatId) => connection.query(
  'INSERT INTO message (userId,content,messageTime,chatId) VALUES ($1,$2,$3,$4) RETURNING id',
  [userId, content, time, chatId],
);

module.exports = addNewMessage;
