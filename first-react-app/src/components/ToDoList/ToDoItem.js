import React from 'react'

const ToDoItem = ({item, onDone, onDelete, onEdit}) => {
  return (
    <li
        className={item.done ? 'done' : ''}
    >
    <span onClick={() => onDone(item.id)}  >{item.title}  {item.dueDate}</span>

    <button type='submit' onClick={() => onDelete(item.id)}>x</button>
    <button type='submit' onClick={() => onEdit(item.id)}>EDIT</button>
    </li>
  )
}

export default ToDoItem