const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const userModel = require('../models/userModel');

// @desc  Auth user / set token
// route  POST api/user/auth
// access  public
const authUser = asyncHandler(async function (req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({email});

  if(user && await user.matchPassword(password)){
    await generateToken(res,user._id);
    res.status(201).json({
      _id : user._id,
      name : user.name,
      email : user.email,
      img : user.imageSrc
    })
  }else{
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc  Reginster a new user
// route  POST api/user
// access  public
const registerUser = asyncHandler(async function (req, res) {
  const { name, email, password, imageSrc } = req.body;
  const userExist = await userModel.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('email id is already in use');
  }

  const user = await userModel.create({
    name,
    email,
    password,
    imageSrc
  })

  if (user) {
    await generateToken(res, user._id,)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      img : user.imageSrc
    })
  } else {
    res.status(400);
    throw new Error('Invalid User Data')
  }
});

// @desc  For log out the user
// route  POST api/user/logout
//access  public
const logoutUser = asyncHandler(async function (req, res) {
  res.cookie('jwt','',{
    httpOnly:true,
    expires:new Date(0)

  })
  res.status(200).json({ message: 'user logged user' });
});

// @desc  Get the user profile
// route  GET api/user/profile
// access  private
const getUserProfile = asyncHandler(async function (req, res) {
  const user = {
    _id : req.user._id,
    name : req.user.name,
    email : req.user.email,
    imageSrc : req.user.imageSrc
  }
  res.status(200).json({ user });
});

// @desc  update the user profile
// route  PUT api/user/prfile
// access  private (which means that this route or function will be only accessalbe with whom with a jsw token)
const updateUserProfile = asyncHandler(async function (req, res) {
  const user = await userModel.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.imageSrc = req.body.imageSrc || user.imageSrc;

    if (req.body.password) {
      user.password = req.body.password || user.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id : updatedUser._id,
      name : updatedUser.name,
      email : updatedUser.email,
      imageSrc : updatedUser.imageSrc
    })
    
  }else{
    res.status(404);
    throw new Error('user not fund')
  }
  res.status(200).json({ message: 'update user' });
});

const getUserData = asyncHandler(async function( req, res ) {
  const { _id } = req.body;
  const user = await userModel.findById(_id);
  console.log(user,115);
  if(user){
    res.status(200).json(user);
  }else{
    res.status(404).json('user not found');
  }
})
module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUserData
}