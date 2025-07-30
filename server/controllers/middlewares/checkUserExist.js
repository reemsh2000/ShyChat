const { checkEmailQuery } = require('../../database/queries');
const { signUpSchema } = require('../utilities/serverSideValidation');

const checkUserExist = async (req, res, next) => {
  try {
    const userObj = await signUpSchema.validateAsync(req.body);
    const { email } = userObj;
    const { rowCount } = await checkEmailQuery(email);
    if (rowCount) {
      res.status(400).json({ message: 'error in Email or password', errorCode: 'AS_1001', details: null });
    }
    req.userObj = userObj;
    next();
  } catch (err) {
    if (err.details) {
      const { message, details } = err;
      res.status(400).json({ message, errorCode: 'AS_1002', details });
    } else {
      next(err);
    }
  }
};

module.exports = checkUserExist;
