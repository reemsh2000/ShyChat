const connection = require('../../config/connection');

const createNewChat = (name = '') => connection.query(
  'INSERT INTO chat (name) VALUES ($1) RETURNING id',
  [name],
);

module.exports = createNewChat;
