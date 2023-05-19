const asyncHandler = require('express-async-handler');
const adminModel = require('../models/adminModel');
const userModel = require('../models/userModel');
const generateAdminToken = require('../utils/adminGen');


const createAdmin = async function(req, res) {
  const admin = await adminModel.create({
    email: 'admin@gmail.com',
    password: '12345',
    isAdmin: true
  });
  await admin.save();
  res.json(admin)

};


const authenticateAdmin = asyncHandler(async function( req, res ){
  const { email, password } = req.body;
  const admin = await adminModel.findOne({email:email});

  if(admin && await admin.matchPassword(password)){
    if(admin.isAdmin){
      await generateAdminToken( res, admin._id );
      res.status(200).json({
        _id : admin._id,
        email : admin.email,
      });
    }else{
      res.status(401);
      throw new Error('Invalid email or password');
    }
  }
})
const logoutAdmin = asyncHandler(async function (req, res) {
  res.cookie('jwt_admin','',{
    httpOnly:true,
    expires:new Date(0)
  })
  res.status(200).json({ message: 'Admin logged out' });
});

const blockUser = asyncHandler(async function( req, res ){
  const { userId } = req.body;
  const user = await userModel.findByIdUpdate({ _id : userId },{
    isBlock : true
  });
  if(user){
    res.status(200).json('user Blcoked');
  }else{
    res.status(404);
    throw new Error('User not found.!');
  }
})

const editUser = asyncHandler(async function( req, res ){
  const { userId } = req.body;
  const user = await userModel.findByIdUpdate({ _id : userId },{
    name,
    email,
    isBlock
  });
  if(user){
    res.status(200).json('user Blcoked');
  }else{
    res.status(404);
    throw new Error('User not found.!');
  }
})

const findAllUsers = asyncHandler(async function(req,res){
  let allUsers = await userModel.find();
  res.status(200).json(allUsers);
})

module.exports = {
  authenticateAdmin,
  logoutAdmin,
  blockUser,
  editUser,
  createAdmin,
  findAllUsers
}