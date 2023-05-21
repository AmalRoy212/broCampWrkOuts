const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');

const protecter = asyncHandler(async function (req, res, next) {
  const { token } = req.body;
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const user = await userModel.findById({ _id: decode.user });
      if (user) {
        req.body.user_Id = user._id;
        next();
      } else {
        res.status(404);
        throw new Error('User is Invalid');
      }

    } catch (error) {
      res.status(401);
      throw new Error('Not Autherized invalid token');
    }
  } else {
    res.status(401);
    throw new Error('User is not Autherized or not having a Token');
  }
})

module.exports = protecter;