import React from 'react'

const ShoppingItem = ({item, index, onItemDone}) => {
    
  return (
    <li 
      className={item.done ? 'done' : ''}
      onClick={() => onItemDone(index)}
    >
      {item.title}
    </li>
  )
}

export default ShoppingItem