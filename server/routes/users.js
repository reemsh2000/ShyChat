const router = require('express').Router();
const { verifySMS } = require('../controllers/utilities/twilio');
const { checkUserExist, checkAuth } = require('../controllers/middlewares');
const {
  signup, login, logout, editProfile,
} = require('../controllers/auth');

router.get('/logout', logout);
router.post('/signup', checkUserExist, signup);

router.post('/login', login);
router.post('/verify', verifySMS);

router.use(checkAuth);
router.put('/editprofile', editProfile);

module.exports = router;
