const router = require('express').Router();

const { signup, login } = require('../controllers/auth');
const { checkUserExist } = require('../controllers/middlewares');

router.post('/signup', checkUserExist, signup);
router.post('/login', login);

module.exports = router;
