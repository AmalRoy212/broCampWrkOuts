import './App.css';
import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container className='my-2'>
        <ToastContainer /> 
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
