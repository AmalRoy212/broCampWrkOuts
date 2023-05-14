const todoModel = require('../model/todoModel');

const getTodos = async function (req, res) {
  try {
    const todos = await todoModel.find();
    res.json(todos);

  } catch (error) {
    console.log(error)
  }
}

const createTodos = async function (req, res) {
  try {
    const todo = new todoModel({
      title: req.body.title
    });
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error)
  }
}

const deleteTodo = async function (req, res) {
  try {
    const todo = await todoModel.findByIdAndDelete(req.params.id);
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
}

const toggleTodoStatus = async function (req, res) {
  try {
    const todo = await todoModel.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getTodos,
  createTodos,
  deleteTodo,
  toggleTodoStatus
}