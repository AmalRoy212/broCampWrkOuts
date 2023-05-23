const express = require('express');
const router = express();
const adminController = require('../controllers/adminController');
const protect = require('../middlewares/adminAuthMiddleware');

router.post('/singup',adminController.signUpAdmin);
router.post('/login',adminController.authAdminLogin);
router.put('/block/user',protect,adminController.blockUsers);
router.put('/users/update',protect,adminController.updateUser);
router.get('/users',protect,adminController.searchUsers);
router.post('/users/create',protect,adminController.createUser);
router.delete('/users/delete',protect,adminController.deleteUser);
router.put('/logout',protect,adminController.logoutAdmin);

module.exports = router