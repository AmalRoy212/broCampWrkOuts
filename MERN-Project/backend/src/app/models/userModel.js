const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  phone : {
    type : Number,
    require : true
  }
})

const User = mongoose.model('user',userSchema);
module.exports = User;