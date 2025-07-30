const { searchUsersByEmail } = require('../../database/queries');

const searchUsersByEmailhandler = async (req, res, next) => {
  const { email } = req.params;
  try {
    const { rows: users, rowCount } = await searchUsersByEmail(email);
    if (rowCount === 0) {
      res.status(404).json({ message: 'No users found' });
    }
    res.json(users);
  } catch (error) {
    next();
  }
};

module.exports = { searchUsersByEmailhandler };
