const connection = require('../config/connection');

const getIdByEmail = (email) => connection.query('SELECT id,photo,bio,name FROM users WHERE email=$1', [email]);

module.exports = getIdByEmail;
