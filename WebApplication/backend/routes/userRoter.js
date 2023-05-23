const express = require('express');
const router = express();
const userController = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware'); 

router.post('/signup',userController.createUser);
router.post('/login',userController.authUser);
router.put('/update',protect,userController.updateUser);
router.post('/home',protect,userController.home);
router.get('/',protect,userController.getUser);
router.put('/logout',protect,userController.logoutUser);

module.exports = router