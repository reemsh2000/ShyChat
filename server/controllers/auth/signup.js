const { addNewUser } = require('../../database/queries');
const { signToken, hashedPassword } = require('../utilities');

const signup = async (req, res, next) => {
  const { userName, phoneNumber, password } = req.userObj;
  try {
    const hashPassword = await hashedPassword(password);
    const { rows } = await addNewUser({ userName, phoneNumber, hashPassword });
    const { id } = rows[0];
    const token = await signToken({ id, phoneNumber });
    res
      .cookie('token', token, { httponly: true, secure: true })
      .status(201)
      .json({ message: 'user created' });
  } catch (error) {
    next(error);
  }
};
module.exports = signup;
