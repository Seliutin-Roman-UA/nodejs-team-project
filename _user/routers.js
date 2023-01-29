const express = require('express');
const userControl = require('./controllers.js');
const { checkUser } = require('../middleware/usermiddleware.js');




const router = express.Router();


router.post('/signup', userControl.userRegistration);

router.get('/verify/:id/:code', userControl.verificateEmailToken);

router.get('/login', userControl.userLogin);

router.get('/current', checkUser, userControl.getInfoCurrentUser);

router.patch('/update', checkUser, userControl.updateUser);

router.patch('/refresh', checkUser, userControl.refreshUser);

module.exports = router;
