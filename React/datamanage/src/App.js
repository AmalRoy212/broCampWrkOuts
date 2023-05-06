
import axios from 'axios';
import {useState} from 'react'

function App() {
  const [state,setState] = useState([])
  return (
    <div className="App">
      <h1>Hey</h1>
      <button onClick ={()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
          console.log(response.data)
          setState(response.data);
        })
      }}>Click</button>
      {
        state.map((obj)=>{
          return(
            <div style={{backgroundColor:'grey',padding:'1rem',border:'2px solid white'}}>
              <h1>{obj.id} {obj.title}</h1>
              <h4>{obj.body}</h4>

            </div>
          )
        })
      }
    </div>
  );
}

export default App;
