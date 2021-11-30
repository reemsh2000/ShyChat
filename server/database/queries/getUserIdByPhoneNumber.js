const connection = require('../config/connection');

const getIdByPhoneNumber = (phoneNumber) => connection.query('SELECT id,photo,bio,name FROM users WHERE phone=$1', [phoneNumber]);

module.exports = getIdByPhoneNumber;
