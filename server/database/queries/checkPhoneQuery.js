const connection = require('../config/connection');

const checkPhoneQuery = (phone) => connection.query('SELECT id,password,approve FROM users WHERE phone= ($1)', [phone]);

module.exports = checkPhoneQuery;
