const connection = require('../config/connection');

const getPhotoById = (id) => connection.query('SELECT photo FROM users WHERE id=$1', [id]);

module.exports = getPhotoById;
