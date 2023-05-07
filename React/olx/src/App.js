
import About from "./Container/About";
import Profile from "./Container/Profile";
import { useState } from 'react';
import { BrowserRouter as Routes , Route } from "react-router-dom";

function App() {
  const [state,setState] = useState('');  
  return (
    <div className="App">
      <button onClick = {()=>setState('About')}>About</button>
      <button onClick = {()=>setState('Profile')}>Profile</button>
      <Routes>
        <Route componant={About} path = '/about'/>
        <Route componant={Profile} path = '/profile'/>
       
      </Routes>
    </div>
  );
}

export default App;
