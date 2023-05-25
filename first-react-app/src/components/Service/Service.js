import React from 'react'

const Rectangles = (props) => {
  return (
    <div className={props.className}>
        {props.icon}
        <h4>{props.title}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default Rectangles