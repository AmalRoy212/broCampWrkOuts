import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { AuthContext } from '../../Store/AuthContext';


function Navbar() {
  const [toggle, setToggle] = useState(false);
  const {isUser,setUser} = useContext(AuthContext)

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
            <div className='left_side'>
                <span onClick={() => setToggle(true)} className='nav_links'>Log In</span>
              </div>
          }
        </div>
      </div>
      {/* will be hidden when clicks it will appear  */}
      
        <div className='toggle_bar'>
          <div className='' style={{width:'50%',marginRight:'25%',marginLeft:'2.7%'}}>
            <div style={{ width: "80%", height: "100%", padding: '1rem', }}>
                <p style={{color:'white'}}><span><h1 style={{justifyContent:'center' ,alignItems:'center',display:'flex'}}>WELCOME</h1></span>
                  “All great beginnings start in the dark, when the moon greets you to a new day at midnight.” “Today is the first day of the rest of your life.” “Never underestimate the power you have to take your life in a new direction.” “It's a new dawn, It's a new day, It's a new life for me</p>
            </div>
            {/* <div style={{ width: "20%", height: "100%" }}>
              <div className='close_button'>
                <h1 style={{ padding: '0', margin: '0', marginTop: '-.65rem', marginLeft: '.1rem', transform: 'rotate(45deg)' }}>+</h1>
              </div>
            </div> */}
          </div>
          {
          toggle && 
          <div className='toggle_condents'>
            <div style={{ width: "80%", height: "100%", padding: '1rem', }}>
            </div>
            <div style={{ width: "20%", height: "100%" }}>
              <div onClick={() => setToggle(false)} className='close_button'>
                <h1 style={{ padding: '0', margin: '0', marginTop: '-.7rem', marginLeft: '.09rem', transform: 'rotate(45deg)' }}>+</h1>
              </div>
            </div>
          </div>
          }
        </div>
    </div>
  )
}

export default Navbar
