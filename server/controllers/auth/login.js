const bcrypt = require('bcrypt');
const { loginSchema } = require('../utilities/serverSideValidation');
const { checkEmailQuery } = require('../../database/queries');
const { signToken } = require('../utilities');

// eslint-disable-next-line consistent-return
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await loginSchema.validateAsync(req.body);
    const { rows } = await checkEmailQuery(email);
    if (!rows.length) {
      return res.status(400).json({ message: 'Invalid Email or password' });
    }

    const {
      id, photo, bio, name,
    } = rows[0];
    // if (rows[0].approve === false) {
    //   return res.status(400).json({ message: 'Please verify your Email' });
    // }

    const compared = await bcrypt.compare(password, rows[0].password);
    if (!compared) {
      return res.status(400).json({ message: 'Invalid Email or password' });
    }
    const token = await signToken({
      id, email, photo, bio, name,
    });
    res.cookie('token', token).json({ message: 'You are Logged Successfully' });
  } catch (err) {
    if (err.details) {
      res.status(400).json({
        message: err.details[0].message,
      });
    } else {
      return next(err);
    }
  }
};

module.exports = login;
