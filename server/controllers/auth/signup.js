const { addNewUser } = require('../../database/queries');
const { hashedPassword } = require('../utilities');
const { checkEmailQuery } = require('../../database/queries');
const { signToken } = require('../utilities');

const signup = async (req, res, next) => {
  const { userName, email, password } = req.userObj;
  try {
    const hashPassword = await hashedPassword(password);
    await addNewUser({ userName, email, hashPassword });
    const { rows } = await checkEmailQuery(email);
    if (rows) {
      const {
        id, photo, bio, name,
      } = rows[0];
      const token = await signToken({
        id, email, photo, bio, name,
      });
      res.cookie('token', token).json({
        message: 'You are Logged Successfully and Verification successful',
      });
    } else {
      res.status(400).json({
        message: 'Verification failed',
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = signup;
