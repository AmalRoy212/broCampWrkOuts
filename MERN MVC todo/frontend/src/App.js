import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Auth from './Store/AuthContext';

function App() {
  return (
    <div className="App">
      <Auth>
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </Auth>
    </div>
  );
}

export default App;
