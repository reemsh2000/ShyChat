const { signToken, verifyToken } = require('./tokenFunctions');
const hashedPassword = require('./hashPassword');
const uploadToCloudinary = require('./cloudinary');
// const { sendSMS, verifySMS } = require('./twilio');

module.exports = {
  signToken, verifyToken, hashedPassword, uploadToCloudinary,
};
