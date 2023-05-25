import  React, {useState} from 'react'


const ShoppingForm = ({onShoppingList}) => {
  const [input, setInput] = useState('')
  
  const addItemHandler = (e) => {
    e.preventDefault()
    onShoppingList(input)
  }

  return (
    <form onSubmit={addItemHandler}>
        <input name='input' type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default ShoppingForm