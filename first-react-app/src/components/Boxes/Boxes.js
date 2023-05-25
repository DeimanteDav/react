import React from 'react'
import './Boxes.css'

const Boxes = (props) => {
  return (
    <div className='boxes-div'>
        {props.icon}
        <h4>{props.title}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default Boxes