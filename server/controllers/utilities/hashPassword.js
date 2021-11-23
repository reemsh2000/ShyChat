const bcrypt = require('bcryptjs');

const { hash } = bcrypt;
const hashPassword = (password) => hash(password, 10);

module.exports = hashPassword;
