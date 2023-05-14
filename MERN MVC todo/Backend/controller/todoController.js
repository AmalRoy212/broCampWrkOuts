const todoModel = require('../model/todoModel');

const getTodos = async function (req, res) {
  try {
    const todos = await todoModel.find();
    res.json(todos);

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getTodos
}