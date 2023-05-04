
import Counter from "./Counter";
// import { Counter2 } from "./Counter2";
import {useState} from "react";

function App() {
  const [state,setState] = useState(false);
  return (
    <div className="App">
      <h1 onClick = {()=>setState(!state)}>Show/Hide</h1>
      {/* here the components are showing and hiding and thats what is called MOUNTING AND UNMOUNTING  */}
      { state ? <Counter /> :null }
      {/* { state && <Counter2 /> } */}
    </div>
  );
}

export default App;
// *******--  USE EFFECT  --********
// MOUNTING =  adding or leading a new componenet is called mounting
// UPDATING  = updating elements in a component (changing the components values)
// UNMOUNTING = deleting or removing a component from the webpage