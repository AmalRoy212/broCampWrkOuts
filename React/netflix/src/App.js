import React from 'react';
import "./App.css"
import NavBar from './Componenets/NavBar/NavBar';
import Banner from './Componenets/Banner/Banner';
import RowPost from './Componenets/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
