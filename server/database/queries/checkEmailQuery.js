const connection = require('../config/connection');

const checkEmailQuery = (email) => connection.query('SELECT * FROM users WHERE email= ($1)', [email]);

module.exports = checkEmailQuery;
