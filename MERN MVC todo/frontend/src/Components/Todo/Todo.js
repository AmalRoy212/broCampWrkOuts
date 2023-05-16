
import React, { useState, useEffect } from 'react';
import axios from '../../Axios/axios'
import Sidebar from '../Sidebad/Sidebar';
import './Todo.css';

function Todo() {
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
    ).then(() => {
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
      <div className='todo_holder'>
        <div className='sideBar' style={{ width: '20%', maxHeight: 'fit-content' }}>
          <Sidebar />
        </div>
        <div className='contentHolder'>
          <h1>My ToDo List</h1>
          <div style={{ display: 'flex' ,marginBottom:'1rem'}}>
            <input className='inputFeild'
              placeholder='Set new Todos'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            ></input>
            <div className='addButton' onClick={() => addTodoHandler(todo)}><h1 style={{ padding: '0', margin: '0', marginTop: '-.3rem' }}>+</h1></div>
            <div style={{ backgroundColor: 'orange' }} className='addButton' onClick={() => addTodoHandler(todo)}>
              <img className='alarmImage' src="https://cdn-icons-png.flaticon.com/512/3557/3557755.png" alt="" />
            </div>
            <div style={{ backgroundColor: 'red' }} className='addButton' onClick={() => addTodoHandler(todo)}>
              <img className='alarmImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Circle-icons-calendar.svg/1200px-Circle-icons-calendar.svg.png" alt="" />
            </div>
          </div>
          <div style={{ height: '100vh', width: '100%' ,overflowY:'auto'}}>
            {!todos || !todos.length ?
              <h3 style={{ color: 'green',justifyContent:'center',alignItems:'center',display:'flex'
              ,border:" 2px solid grey",padding:'1rem',borderRadius:'10px'
            }}>No todos Found!</h3>
              :
              todos.map((todo) => {
                return <div key={todo._id} >
                  <div className='cards'>
                    <div className='firstHlf'>
                      <span onClick={() => { todoStatusHandler(todo._id) }}>
                        <h4>{todo.title} hi</h4>
                        {
                          todo.complete && <div><h1 style={{ color: 'green' }}>completed</h1></div> 
                        }
                      </span>
                    </div>
                    <div className='scndHlf'>
                      <div onClick={() => deleteTodoHandler(todo._id)}>
                        <img className='deleteImage' src="https://apps.odoo.com/web/image/loempia.module/154779/icon_image?unique=7264e76" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo
