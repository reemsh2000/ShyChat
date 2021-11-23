const connection = require('../config/connection');

const checkPhoneNumber = (phone) => connection.query('SELECT id from users where phone=$1', [phone]);

module.exports = checkPhoneNumber;
