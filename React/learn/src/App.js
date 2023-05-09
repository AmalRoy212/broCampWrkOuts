import {useState} from 'react'
import Counter from './Counter';
import Persons from './Persons';
function App() {
  const [count,setCount] = useState(0);
  // let count = 0;
  const addCount = ()=>{
    setCount(count+1);
    // count = count+1;
    console.log(count);
  }
  let data = {
    title : 'First Counter',
    count
  }
  let persons = [{name:'Amal',age:25},{name:'Akhil',age:26},{name:'Dhamu',age:55}];
  return (
    <div className="App">

      <button onClick = {addCount}>Add</button>
      <Counter {...data} />
      <Counter title = {'Second Counter'}  count = {count} />

      {/* mapping an array of objects in components */
        persons.map((obj,index)=><Persons key = {index} name = {obj.name} age = {obj.age} />)
      }
      <h1 style={{color:'red'}}>**********************</h1>
      {
        persons.map((obj,index)=> <Persons key = {index} {...obj}/>)
      }
    </div>
  );
}

export default App;
