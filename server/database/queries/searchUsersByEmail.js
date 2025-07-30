const connection = require('../config/connection');

const searchUsersByEmail = (email) => connection.query('SELECT * FROM users WHERE email LIKE $1 or name LIKE $1', [`${email}%`]);
module.exports = searchUsersByEmail;
