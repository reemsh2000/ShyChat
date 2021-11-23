const logout = (req, res) => {
  res.clearCookie('token').json({ message: 'Logout Successfully' });
};

module.exports = logout;
