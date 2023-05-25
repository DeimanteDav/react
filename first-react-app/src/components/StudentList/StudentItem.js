import React, { useState } from 'react'

const StudentItem = (props) => {
    let {name, surname, age, phone, email, knowledge, group, languages, id} = props.item
    let {onDelete, onEdit, formNotValid} = props


    const [showData, setShowData] = useState(false)
    
    const showDataHandler = (e) => {
        setShowData(prevState => prevState = !prevState)
        if (showData) {
            e.target.textContent = 'Show data'
        } else {
            e.target.textContent = 'Hide data'
        }
    }    
    


    return (
        <li className='student-item'>
            <div>
                <label htmlFor='name'>Name:</label>
                <span name='name'>{name}</span>
            </div>
            <div>
                <label htmlFor='surname'>Surname:</label>
                <span name='surname'>{surname}</span>
            </div>
            <div>
                <label htmlFor='age'>Age:</label>
                <span name='age'>{age}</span>
            </div>
            <div>
                <label htmlFor="phone">Phone number:</label>
                <span name='phone'>{showData ? phone : '********'}</span>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <span name='email'>{showData ? email : '*******'}</span>
            </div>
            <div>
                <label htmlFor="knowledge">Programming knowledge:</label>
                <span name='knowledge'>{knowledge}</span>
            </div>
            <div>
                <label htmlFor="knowledge">Group:</label>
                <span name='knowledge'>{group}</span>
            </div>
            <div>
                <label htmlFor="languages">IT languages:</label>
                <span name='languages'>{languages}</span>
            </div>

            <button onClick={showDataHandler}>Show data</button>
            <button onClick={() => onDelete(id)}>Delete student</button>
            <button onClick={() => onEdit(id)}>Edit student</button>
        </li>
  )
}

export default StudentItem