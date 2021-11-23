const { signToken, verifyToken } = require('./tokenFunctions');
const hashedPassword = require('./hashPassword');

module.exports = { signToken, verifyToken, hashedPassword };
