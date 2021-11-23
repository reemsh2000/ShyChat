const router = require('express').Router();

const { checkUserExist, checkAuth } = require('../controllers/middlewares');
const {
  signup, login, logout, editProfile,
} = require('../controllers/auth');

router.get('/logout', logout);
router.post('/signup', checkUserExist, signup);
router.post('/login', login);

router.use(checkAuth);
router.put('/editprofile', editProfile);

module.exports = router;
