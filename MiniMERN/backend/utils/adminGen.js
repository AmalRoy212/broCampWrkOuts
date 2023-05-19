const jwt = require('jsonwebtoken');

const generateAdminToken = function( res, userId ){
  const token = jwt.sign({ userId },process.env.JWT_SECRET,{
    expiresIn:"30d"
  });
  res.cookie('jwt_admin',token,{
    httpOnly : true,
    domain : 'localhost',
    path : '/' ,
    secure : process.env.NODE_ENV !== 'development',
    sameSite : 'strict',
    maxAge : 30 * 24 * 60 * 60 * 1000
  })
}

module.exports = generateAdminToken;