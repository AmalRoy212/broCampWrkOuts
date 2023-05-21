const jwt = require('json');

const generateAccessToken = function(user_id){
  const accessToken = jwt.sign(user_id,process.env.ACCESS_TOKEN_SECRET);
  localStorage.setItem('userToken',accessToken);
}

export default generateAccessToken;