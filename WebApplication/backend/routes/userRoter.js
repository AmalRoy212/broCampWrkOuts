const express = require('express');
const router = express();
const userController = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware'); 

router.post('/signup',userController.createUser);
router.post('/login',userController.authUser);
router.post('/home',protect,userController.home);

module.exports = router