import React, { useState } from 'react'
import './Header.css';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import {  Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';




function Header() {
  const [toggle, setToggle] = useState(false);
  let isUser = false
  return (
    <div>
      <div className='holder'>
        <div className='inner'>
          <img className='logo' src="https://i.pinimg.com/originals/66/51/4b/66514bb307d06a9241d23a1171898b56.jpg" alt="" />
          { isUser ?
            <div>
              <div className='left_side'>
                <span onClick={() => setToggle(true)} className='nav_links'>Today</span>
                <span onClick={() => setToggle(true)} className='nav_links'>Plans</span>
                <span onClick={() => setToggle(true)} className='nav_links'>Reminders</span>
                <span onClick={() => setToggle(true)} className='nav_links'>Notification</span>
              </div>
              <div onClick={() => setToggle(true)} className='me'>
                <div className='profile'>
                  <img style={{height:'58px',width:'60px',borderRadius:'50%'}} src="https://avatoon.net/wp-content/uploads/2022/07/Cartoon-Avatar-White-Background-300x300.png" alt="" />
                </div>
              </div>
            </div>
            :
            (
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',right:0}}>
                <LinkContainer to={'/login'}>
                  <Nav.Link><FaSignInAlt /> Sign In</Nav.Link>
                </LinkContainer>
                <LinkContainer style={{marginLeft:'1rem'}} to={'/register'}>
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
