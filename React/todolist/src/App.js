

import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => { setToDo(e.target.value); console.log(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, {id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((objects) => {
          return ( 
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  console.log(objects);
                  console.log(e.target.checked)
                  setToDos(toDos.filter((obj)=>{
                    if(obj.id === objects.id){
                      obj.status = e.target.checked;
                    }
                    return obj;
                  }))
                }} value={objects.status} type="checkbox" name="" id="" />
                <p>{objects.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>)
        })}
        {
          toDos.map((obj)=>{
            if(obj.status){
              return (<h1 style={{padding:'1rem',font:'small-caption'}}>{obj.text} Completed..!</h1>)
            }
            return null;
          })
        }
      </div>
    </div>
  );
}

export default App;
