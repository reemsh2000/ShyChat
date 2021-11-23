const router = require('express').Router();

const { signup, login, logout } = require('../controllers/auth');
const { checkUserExist } = require('../controllers/middlewares');

router.get('/logout', logout);
router.post('/signup', checkUserExist, signup);
router.post('/login', login);

module.exports = router;
