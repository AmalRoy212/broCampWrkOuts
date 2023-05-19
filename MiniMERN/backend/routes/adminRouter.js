const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/',adminController.authenticateAdmin);
router.post('/logout',adminController.logoutAdmin);
router.put('/block',adminController.blockUser);
router.put('/edit/user',adminController.editUser);
router.post('/create',adminController.createAdmin);
router.get('/get',adminController.findAllUsers);

module.exports = router