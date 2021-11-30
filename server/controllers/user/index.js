const { searchUsersByPhone } = require('../../database/queries');

const searchUsersByPhonehandler = async (req, res, next) => {
  const { phone } = req.params;
  try {
    const { rows: users, rowCount } = await searchUsersByPhone(phone);
    if (rowCount === 0) {
      res.status(404).json({ message: 'No users found' });
    }
    res.json(users);
  } catch (error) {
    next();
  }
};

module.exports = { searchUsersByPhonehandler };
