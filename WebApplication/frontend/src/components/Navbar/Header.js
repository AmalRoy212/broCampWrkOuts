import React, { useState } from 'react'
import './Header.css';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import {  Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../config/axios';
import { logout } from '../../redux-toolkit/authSlice';

function Header() {
  const dispatch = useDispatch();
  let { token } = useSelector((state) => state.auth);
  console.log(token);
  const logOutHandler = () => {
    axios.put('/users/logout',null,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res.data);
      dispatch(logout());
    }).catch((error) => console.log(error.message));
  }

  return (
    <div>
      <div className='holder'>
        <div className='inner'>
          <img className='logo' src="https://i.pinimg.com/originals/66/51/4b/66514bb307d06a9241d23a1171898b56.jpg" alt="" />
          { token ?
            <div>
              <div className='left_side'>
              <LinkContainer to={'/profile'}>
                  <Nav.Link><FaSignInAlt /> Profile</Nav.Link>
                </LinkContainer>
                <Nav.Link style={{marginLeft:'1rem'}} onClick={logOutHandler}><FaSignOutAlt /> Log Out</Nav.Link>
              </div>
            </div>
            :
            (
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',right:0}}>
                <LinkContainer style={{marginLeft:'2rem'}} to={'/login'}>
                  <Nav.Link><FaSignInAlt /> Sign In</Nav.Link>
                </LinkContainer>
                <LinkContainer style={{marginLeft:'1rem'}} to={'/signup'}>
                  <Nav.Link><FaSignOutAlt /> Sign Up</Nav.Link>
                </LinkContainer>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header
