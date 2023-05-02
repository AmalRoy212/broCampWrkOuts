import './app.css'
//importing the funtion component
import Header from './componanats/Header';
//importin the calss components
import Tail from './ClassCompo/Tail'


function App() {
  const data = ' .am a software engineer'
  return (
    //there will be a parent div which will on  return  so
    <div>
      <h1 style={{color:"red",backgroundColor:"purple"}}>amal</h1>
    {/* connecting css from out side file */}
      <h4 className="hello">Wayanad{data}</h4>
      {/* creating a new component and calling it  */}
      <Hai />
      <Hai />
      <Hai />
      {/* crating another component as outer file importing it  */}
      <Header data={data} />
      <Tail data={data}/>
    </div>
  );
}

function Hai(){
  return(
    <h1>hey am doing my job with lot of love</h1>
  );
}

export default App;
