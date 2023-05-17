const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

//routes
router.post('/',userController.registerUser);
router.post('/auth',userController.authUser);
router.post('/logout',userController.logoutUser);
//chain routing 
router
  .route('/profile')
    .get(authMiddleware.protect,userController.getUserProfile)
    .put(authMiddleware.protect,userController.updateUserProfile);

module.exports =  router;