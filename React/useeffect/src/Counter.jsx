// for doing mounting 
import React,{useState,useEffect} from 'react'

function Counter() {
  //this is what is updating 
  const [count,setCount] = useState(0);
  //using use effect
  useEffect(()=>{
    console.log('Mounting...');
    console.log('updating..',count);
    // return ()=>{
    //   console.log('UnMounting...');
    // }
  },[count])

  return (
    <div>
      <button onClick = {()=>setCount(count+1)}>Add count</button>
      <h1>Hello am counter componenet & count is : {count}</h1>
    </div>
  )
}

export default Counter
