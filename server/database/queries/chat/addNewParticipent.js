const connection = require('../../config/connection');

const addNewParticipant = (userId, chatId) => connection.query(
  'INSERT INTO chatparticipant (userId,chatId) VALUES ($1,$2) RETURNING id',
  [userId, chatId],
);

module.exports = addNewParticipant;
