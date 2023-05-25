import React from 'react'
import LargeButton from '../Partials/LargeButton/LargeButton'

const SendMessage = () => {
  return (
    <div className="column4">
        <h4>SEND MESSAGE</h4>
        <textarea type="text" placeholder="Your email address" rows="5"></textarea>
        <LargeButton text='send message' link='#'></LargeButton>
    </div>
  )
}

export default SendMessage