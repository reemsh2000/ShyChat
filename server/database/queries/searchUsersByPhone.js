const connection = require('../config/connection');

const searchUsersByPhone = (phoneNumber) => connection.query('SELECT * FROM users WHERE phone LIKE $1', [`${phoneNumber}%`]);
module.exports = searchUsersByPhone;
