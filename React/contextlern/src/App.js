import About from "./Container/About";
import Profile from "./Container/Profile";
import { useState } from "react";
import { Route, Link, Routes , useNavigate, redirect} from "react-router-dom";
import AppContext from './appContext';

function App() {
  const [state, setState] = useState(10);
  return (
    <div className="App">
      <AppContext.Provider value = {{data:state}} />
      {/* <button onClick={() => setState("Profile")}>Profile</button> */}
          <Link to={'/about'}>Touch</Link>
          <Link to={'/profile'}>Touch</Link>
        <Routes>
          <Route Component={About} path="/about" />
          <Route Component={Profile} path="/profile" />
        </Routes>
    </div>
  );
}

export default App;
