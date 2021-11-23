const { verify, sign } = require('jsonwebtoken');

const {
  env: { ACCESS_TOKEN_SECRET },
} = process;

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});
const signToken = (payload) => new Promise((resolve, reject) => {
  sign(payload, ACCESS_TOKEN_SECRET, (err, token) => {
    if (err) {
      return reject(err);
    }
    return resolve(token);
  });
});

module.exports = { signToken, verifyToken };
