import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup';
import UserHome from './pages/UserHome'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
