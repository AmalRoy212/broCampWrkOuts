const userModel = require('../app/models/userModel');
const userController = require('../app/controllers/userLoginController');

export const findingById = async function (_id){
  const user = await userModel.findById(_id);
  
}