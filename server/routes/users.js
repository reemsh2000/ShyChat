const router = require('express').Router();
const { checkUserExist, checkAuth } = require('../controllers/middlewares');
const {
  signup, login, logout, editProfile,
} = require('../controllers/auth');
const { searchUsersByEmailhandler } = require('../controllers/user');
const getContacts = require('../controllers/auth/getContacts');
const getMessages = require('../controllers/chat/getMessages');

router.get('/logout', logout);

router.post('/login', login, checkAuth);
router.post('/signup', checkUserExist, signup, checkAuth);
router.get('/search/:email', searchUsersByEmailhandler);
router.use(checkAuth);
router.get('/contacts', getContacts);
router.put('/editprofile', editProfile);
// router.put('/profile', editProfile);
router.post('/messages', getMessages);

module.exports = router;
