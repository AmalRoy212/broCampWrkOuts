const express = require('express');
const router=express();
const userLoginController = require('../app/controllers/userLoginController');

router.get('/',userLoginController.userAuthentication);

module.exports=router