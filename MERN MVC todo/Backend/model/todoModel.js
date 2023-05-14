const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title : {
    type : String,
    required : true,
    trim : true
  },
  complete : {
    type : Boolean,
    default : false
  }
});

const Todo = mongoose.model('todo',todoSchema);

module.exports = Todo;