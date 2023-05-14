
import React, { useState, useEffect } from 'react';
import axios from './Axios/axios'
import './App.module.css';

function App() {
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = () => {
    axios.get(`/todos`).then((res) => {
      setTodos(res.data)
    }).catch((err) => console.error(err));
  }

  const addTodoHandler = (title) => {
    axios.post('/todo/new', {
      title
    }
    ).then((res) => {
      getTodos();
      setTodo('');
    }).catch((err) => console.error(err));
  }

  const deleteTodoHandler = (id) => {
    axios.delete(`/todo/delete/${id}`).then((res) => {
      setTodos(todos.filter((todo) => todo._id !== res.data._id))
    }).catch((err) => console.error(err));
  }

  const todoStatusHandler = (id) => {
    axios.get(`todo/status/${id}`)
      .then((res) => {
        getTodos();
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Set new todo'
        value={todo}
      />
      <div onClick={() => addTodoHandler(todo)}><h1>+</h1></div>
      <div style={{ height: '100vh', width: '100%' }}>
        {!todos || !todos.length ?
          <h3 style={{ color: 'green' }}>No todos Found!</h3>
          :
          todos.map((todo) => {
            return <div key={todo._id} >
              <span onClick={() =>{todoStatusHandler(todo._id)}}>
                <h4 style={{color: 'red' }}>{todo.title} hi</h4>
                {
                  todo.complete && <h1 style={{color:'green'}}>completed</h1>
                }
              </span>
              <div onClick={() => deleteTodoHandler(todo._id)}>Delete</div>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
