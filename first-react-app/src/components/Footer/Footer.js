import React from 'react'
import LargeButton from '../Partials/LargeButton/LargeButton'
import './Footer.css'
import Contacts from './Contacts'
import SendMessage from './SendMessage'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-content-wrapper">
                <Contacts></Contacts>

                <div className="column2">
                    <h4>Company</h4>
                    <h5>Lorem Ipsum 1</h5>
                    <h5>Lorem 2</h5>
                    <h5>Lorem 3</h5>
                    <h5>Lorem 4</h5>
                    <h5>Lorem 5</h5>
                </div>

                <div className="column3">
                    <h4>Support</h4>
                    <h5>Lorem Ipsum 6</h5>
                    <h5>Lorem Ipsum 7</h5>
                    <h5>Lorem Ipsum 8</h5>
                    <h5>Lorem Ipsum 9</h5>
                    <h5>Lorem Ipsum 10</h5>
                </div>

                <SendMessage></SendMessage>
            </div>
        </div>
    </div>
  )
}

export default Footer