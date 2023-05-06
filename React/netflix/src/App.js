import React from 'react';
import "./App.css"
import NavBar from './Componenets/NavBar/NavBar';
import Banner from './Componenets/Banner/Banner';
import RowPost from './Componenets/RowPost/RowPost';
import {originalsURL,actionURL,comedyURL,romaticURL} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url = {originalsURL} title = {'NetFlix Originals'}/>
      <RowPost url = {actionURL} title = {'Action'}  isSmall/>
      <RowPost url = {comedyURL} title = {'Comedy'}  isSmall/>
      <RowPost url = {romaticURL} title = {'Romatic'}  isSmall/>
    </div>
  );
}

export default App;
