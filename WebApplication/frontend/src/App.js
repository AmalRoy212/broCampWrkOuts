import './App.css';
import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'
import Header from './components/Navbar/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className='my-2'>
        <ToastContainer /> 
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
