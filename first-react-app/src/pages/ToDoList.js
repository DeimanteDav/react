import React, { useState } from 'react'
import './ToDoList.css'
import ToDoItem from '../components/ToDoList/ToDoItem'

const ToDoList = () => {
    let toDoList = [
        {
            title: 'susitvarkyt',
            done: false,
            dueDate: '2024-05-11',
            id: Math.random(),
        },
        {
            title: 'padaryti darbus',
            done: true,
            dueDate: '2023-08-05',
            id: Math.random(),
        },
        {
            title: 'nueiti',
            done: false,
            dueDate: '2023-09-01',
            id: Math.random(),
        },
    ]

    const [list, setList] = useState(toDoList)

    const [input, setInput] = useState('')
    const [date, setDate] = useState('')
    const [isEditing, setIsEditing] = useState(null)

    const doneHandler = (id) => {
        let itemIndex = list.findIndex(item => item.id === id)
        setList(prevState => {
            let newState = [...prevState]
            newState[itemIndex] = {
                title: newState[itemIndex].title,
                done: !newState[itemIndex].done,
                dueDate: newState[itemIndex].dueDate,
                id: Math.random()
            }
            return newState
        })

    }

    const deleteHandler = (id) => {
        setList (prevState => {
            let newState = [...prevState]

            return newState.filter(item => item.id !== id)
        })
    }

    const editHandler = (id) => {
        let itemIndex = list.findIndex(item => item.id === id)
        setInput(list[itemIndex].title)
        setDate(list[itemIndex].dueDate)
        setIsEditing(id)
    }

    let toDoListElement = list.map((item, i) => (
       <ToDoItem
            key={i}
            index={i}
            item={item}
            onDone={doneHandler}
            onDelete={deleteHandler}
            onEdit={editHandler}
       ></ToDoItem>
    ))

    
    
    const toDoListHandler = (e) => {
        e.preventDefault()

        if (isEditing) {
            setList(prevState => {
                let itemIndex = prevState.findIndex(item => item.id === isEditing)

                let newState = [...prevState]

                newState[itemIndex] = {
                    ...newState[itemIndex],
                    title: input,
                    dueDate: date,
                }

                setIsEditing(null)
                return newState
            })
        } else {
            setList(prevState => {
                let newToDo = {
                    title: input,
                    done: false,
                    dueDate: date,
                    id: Math.random()
                }
                console.log(newToDo);
                return [newToDo, ...prevState]
            })
        }
        setInput('')
        setDate('')
    }


    return (
    <div>
        <form onSubmit={toDoListHandler}>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
            <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input>
            <button type='submit'>Add</button>
        </form>

        <ul>{toDoListElement}</ul>
    </div>
    )
}

export default ToDoList

// input type date kad iki kada
// title done dueDate
// istrynti itema su x prie kiekvieno

// redaguoti edit prie keikvieno kad uzipyldintu input ir duedate
// state ar siuo metu redaguajama creating true false

