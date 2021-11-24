const { addNewUser } = require('../../database/queries');
const { hashedPassword } = require('../utilities');

const signup = async (req, res, next) => {
  const { userName, phoneNumber, password } = req.userObj;
  try {
    const hashPassword = await hashedPassword(password);
    await addNewUser({ userName, phoneNumber, hashPassword });
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = signup;
