const { verifyToken } = require('../utilities');

const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(400).json({ message: 'you are not authorized' });
  }
  const decoded = await verifyToken(token);
  req.userObj = decoded;
  next();
};

module.exports = checkAuth;
