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
    // const token = await generateAthToken(user);
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400);
    throw new Error('Bad request creadentials are not valid');
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
    if (!user.isBlocked) {
      const token = await generateAthToken(user);
      const updatedUser = await userModel.findByIdAndUpdate(
        { _id: user._id },
        { $set: { accessToken: token } },
      )
      if (updatedUser) {
        userLoginHelper(updatedUser._id,res)
      }
    } else {
      res.send(403);
      throw new Error('Access denied forbidden');
    }
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
})

async function userLoginHelper(_id,res){
  const user = await userModel.findById(_id);
  if(user && user.accessToken !== ''){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token : user.accessToken
    })
  }
}

/*
  * Sending home : method return user if the user is valid
  * Method : POST
  * Route : /api/users/home
  * Access : private
  * the root for just verifying the accesing the correct user
*/

const home = asyncHandler(async function (req, res) {
  const { user_Id } = req.body;
  const user = await userModel.findById({ _id: user_Id });
  if (user) {
    res.status(200).json({
      name: user.name
    })
  } else {
    res.status(401);
    throw new Error('User does not exist');
  }
})

/*
  * Loggin Out : method handle the loggin out of user by clearing the token
  * Method : POST
  * Route : /api/users/logout
  * Access : Private
*/

const logoutUser = asyncHandler(async function (req, res) {
  const { user_Id } = req.body;
  const user = await userModel.findByIdAndUpdate({ _id : user_Id},{$set :{accessToken:''}});
  if(user){
    res.status(200).json({completed : true,message : 'loged out succesfully'});
  }
})

/*
  * Get User : method return the user entire details as well as the token
  * Method : Get
  * Route : /api/users
  * Access : Private
*/

const getUser = asyncHandler( async function( req, res ){
  const { user_Id } = req.body;
  const user = await userModel.findById({ _id : user_Id });
  if(!user){
    res.status(404);
    throw new Error('User does not exist');
  }
  res.status(200).json({
    id : user._id,
    name : user.name,
    email : user.email,
    token : user.accessToken
  })
})
module.exports = {
  createUser,
  authUser,
  home,
  getUser,
  logoutUser
}