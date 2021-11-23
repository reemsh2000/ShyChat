const connection = require('../config/connection');

const addNewUser = ({ userName, phoneNumber, hashPassword }) => connection.query(
  'INSERT INTO users (name, phone, password) VALUES ($1, $2, $3) RETURNING id',
  [userName, phoneNumber, hashPassword],
);

module.exports = addNewUser;
