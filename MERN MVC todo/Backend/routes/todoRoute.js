const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');

router.get('/todos', todoController.getTodos);
router.post('/todo/new', todoController.createTodos);
router.delete('/todo/delete/:id', todoController.deleteTodo)
router.get('/todo/status/:id', todoController.toggleTodoStatus);

module.exports = router;