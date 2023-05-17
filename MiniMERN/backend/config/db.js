const mongoose = require('mongoose');

const connectDB = async function(){
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo Connected On : ${connect.connection.host}`)
  } catch (error) {
   console.error(`Error : ${error.message}`); 
   process.exit(1)
  }
}

module.exports = connectDB;