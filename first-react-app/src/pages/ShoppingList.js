import React, { useState } from 'react'
import './ShoppingList.css'
import ShoppingItem from '../components/ShoppingList/ShoppingItem'
import ShoppingForm from '../components/ShoppingList/ShoppingForm'

const ShoppingList = () => {
  let shoppingList = [
    {
      title: 'pomidorai',
      done: false,
    },
    {
      title: 'bananai',
      done: true,
    },
    {
      title: 'morkos',
      done: true,
    },
    {
      title: 'pienas',
      done: false,
    },
    {
      title: 'slyvos',
      done: false,
    }
  ]


  // const [list, setList] = useState(shoppingList.map(list => list.title))
  // const [done, setDone] = useState(shoppingList.map(list => list.done))

  // const doneHandler = (index) => {
  //   setDone(prevState => {
  //     let newState = [...prevState]
  //     newState[index] =!newState[index]
  //     return newState
  //   })
  // }

  // let shoppingListElements = list.map((item, i) => {
  //   return <li className={done[i].toString()} key={i} onClick={() => doneHandler(i)}>{item}</li>
  // })

  // return (
  //   <div>
  //     <form onSubmit={(e) => {
  //         e.preventDefault()
          
  //         let inputValue = e.target[0].value

  //         setList(prevState => [inputValue, ...prevState])
  //         setDone(prevState => [false, ...prevState])

  //         e.target[0].value = ''
  //     }}>
  //       <input onSubmit={(e) => e.target.value = ''}></input>
  //     </form>

  //     {shoppingListElements.length > 0 ? <ul>{shoppingListElements}</ul> : <p>Your shopping list is empty</p>}
  //     {/* <ul>{shoppingListElements}</ul> */}
  //   </div>
  // )

  const [list, setList] = useState(shoppingList)
  

  const doneHandler = (i) => {
    setList(prevState => {
      let newState = [...prevState]
      newState[i] = {
        title: newState[i].title,
        done: !newState[i].done
      }
      return newState
    })
  }

  let shoppingListElements = list.map((item, i) => {
    return <ShoppingItem item={item} index={i} key={i} onItemDone={doneHandler}></ShoppingItem>
  })

  const shoppingListHandler = (input) => {
    setList(prevState => [{title: input, done: false}, ...prevState])
  }


  return (
    <div>
      <ShoppingForm onShoppingList={shoppingListHandler}></ShoppingForm>

      <ul>{shoppingListElements}</ul>
    </div>
  )
}

export default ShoppingList

// 1. Naudojant react-router-dom sukurti du routes (puslapius): Shopping List.

// 2. ShoppingList komponente sukurti masyvą su penkių pirkinių sąrašu. Kiekvienas pirkinys turi būti objektas ir turėti properties: 
// 2.1 title (string tipo)
// 2.2. done (boolean tipo)
// 3.1. Jeigu pirkinių masyvas neturi nei vieno nario, tai į ekrane parašyti: „Your shopping list is empty."
// 3.2. Jeigu pirkinių masyve yra bent vienas narys, tai kiekvieną nario title property išvesti į ekraną panaudojant ShoppingItem komponentą


// sukurti forma: 1input ka nusipirkt; by default done=false; persidaryti i state

// kai paspaudi ant pirkinio kad pakeistu done i priesinga, stylius done perbraukta o nedone neperbraukta