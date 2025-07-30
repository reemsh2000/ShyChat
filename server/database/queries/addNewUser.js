const connection = require('../config/connection');

const addNewUser = ({ userName, email, hashPassword }) => connection.query(
  'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
  [userName, email, hashPassword],
);

module.exports = addNewUser;
