import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup';
import UserHome from './pages/UserHome'
import Login from './pages/Login';
import PrivateRoute from './components/protectedRoute/PrivateRoutes'
import Profile from './pages/Profile';
import EditUser from './pages/EditUser'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* <Route index={true} path='/' element={<UserHome />} /> */}
      <Route index={true} path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      {/* provate routes  */}
      <Route path='' element={<PrivateRoute />} >
        <Route path='/home' element={<UserHome />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit/profile' element={<EditUser />} />
      </Route>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);