const { checkPhoneQuery } = require('../../database/queries');
const { signUpSchema } = require('../utilities/serverSideValidation');

const checkUserExist = async (req, res, next) => {
  try {
    const userObj = await signUpSchema.validateAsync(req.body);
    const { phoneNumber } = userObj;
    const { rowCount } = await checkPhoneQuery(phoneNumber);
    if (rowCount) {
      res.status(400).json({ message: 'error in phone or password' });
    }
    req.userObj = userObj;
    next();
  } catch (err) {
    if (err.details) {
      res.status(400).json(err.message);
    } else {
      next(err);
    }
  }
};

module.exports = checkUserExist;
