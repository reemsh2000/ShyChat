const connection = require('../config/connection');

const getPhotoById = (id) => connection.query('SELECT * FROM users WHERE id=$1', [id]);

module.exports = getPhotoById;
