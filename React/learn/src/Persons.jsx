import React from 'react'

function Persons(props) {
  return (
    <div>
      <h4 style={{color:'green'}}>****Perosn****</h4>
      <h2>Name : {props.name}</h2>
      <h3>Age : {props.age}</h3>
    </div>
  )
}

export default Persons
