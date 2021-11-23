const connection = require('../config/connection');

const getUserById = (id) => connection.query('SELECT photo FROM users WHERE id=$1', [id]);

module.exports = getUserById;
