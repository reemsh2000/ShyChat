const router = require('express').Router();

const { signup } = require('../controllers/auth');
const { checkUserExist } = require('../controllers/middlewares');

router.post('/signup', checkUserExist, signup);

module.exports = router;
