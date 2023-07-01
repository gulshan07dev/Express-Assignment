const express = require('express');

const {home, registerUser, userLogin} = require('../controller/userController.js');

const router = express.Router();

router.get('/', home);
router.post('/register', registerUser);
router.post('/login', userLogin);

module.exports = router;