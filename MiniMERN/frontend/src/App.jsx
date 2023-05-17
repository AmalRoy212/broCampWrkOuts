import React from 'react'
import Header from './components/header/header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FirebaseContext } from './context/firebaseContext';
import firebase from './firebase/config'


function App() {
  return (
    <div>
      <FirebaseContext.Provider value={{firebase}}>
        <Header />
        <ToastContainer /> 
        <Container className='my-2'>
          <Outlet />
        </Container>
      </FirebaseContext.Provider>
    </div>
  )
}

export default App
