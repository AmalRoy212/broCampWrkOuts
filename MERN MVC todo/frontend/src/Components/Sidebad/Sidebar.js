import React from 'react';
import './Sidebar.css'

function Sidebar() {
  return (
    <div>
      <div className='sidebar_holder'>
        <h3 className='navigators'>ToDo</h3>
        <h3 className='navigators'>My Day</h3>
        <h3 className='navigators'>Create Plan</h3>
        <h3 className='navigators'>Stop Watch</h3>
      </div>
    </div>
  )
}

export default Sidebar
