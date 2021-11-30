const connection = require('../config/connection');

const searchUsersByPhone = (phoneNumber) => connection.query('SELECT id FROM users WHERE phone %STARTSWITH $1 LIMIT 4;', [phoneNumber]);

module.exports = searchUsersByPhone;
