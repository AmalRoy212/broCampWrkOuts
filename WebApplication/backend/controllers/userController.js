const generateAthToken = require('../utils/generateToken');
const userModel = require('../models/userModel');
const asyncHandler = require('express-async-handler');

/*
  * creating user : method Returns the userToken along wiht userDetails
  * Method : POST
  * Route : /api/users/signup
  * Access : public
*/

const createUser = asyncHandler(async function (req, res) {
  const { name, email, password } = req.body;

  const userExist = await userModel.findOne({ email: email });
  if (userExist) {
    console.log(userExist);
    res.status(400);
    throw new Error('email id is already in use');
  }

  const user = await userModel.create({
    name,
    email,
    password
  });

  if (user) {
    const token = await generateAthToken(user);
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token
    })
  }
});

/*
  * Authenticate user : method Returns the userToken along wiht userDetails
  * Method : POST
  * Route : /api/users/login
  * Access : public
*/

const authUser = asyncHandler(async function (req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email: email });

  if (user && await user.matchPassword(password)) {
    if(!user.isBlocked){
      const token = await generateAthToken(user);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token
      })
    }else{
      res.send(403)
      throw new Error('Access denied forbidden');
    }
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
})

/*
  * Sending home : method return user if the user is valid
  * Method : POST
  * Route : /api/users/home
  * Access : private
  * the root for just verifying the accesing the correct user
*/

const home = asyncHandler(async function (req, res) {
  const { user_Id } = req.body;
  const user = await userModel.findById({ _id : user_Id });
  if(user){
    res.status(200).json({
      name : user.name
    })
  }
  
})

module.exports = {
  createUser,
  authUser,
  home
}