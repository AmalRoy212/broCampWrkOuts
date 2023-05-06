import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button style={{marginLeft:'15px'}} className='button'>My List</button>
        </div>
        <h1 className='discription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, molestiae beatae quod rerum sit alias eum harum. Vitae, ab alias!</h1>
        <div className="fade">

        </div>
      </div>
    </div>
  )
}

export default Banner
