import React from 'react'
import Header from './components/header/header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Header />
      <ToastContainer /> 
      <Container className='my-2'>
         <Outlet />
      </Container>
    </div>
  )
}

export default App
