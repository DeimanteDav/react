import React from 'react'
import { useState } from 'react'

const CounterPage = () => {
    const [counter, setCounter] = useState(5)    

    const [grades, setGrades] = useState([])


    const deleteGradeHandler = (index) => {
        setGrades(prevState => {
            let newState = [...prevState]
            newState.splice(index, 1)
            return newState
        })
    }
 
    let gradesList = grades.map((grade, i) => {
        return <li key={i} onClick={() => deleteGradeHandler(i)}>{grade}</li>
    })

    const gradesHandler = () => {
        setGrades(prevState => {
            // let updatedArr = [...prevState]
            // updatedArr.unshift(counter)
            // return updatedArr
            
            return [counter, ...prevState]
        })
    }

    const inputHandler = (e) => {
        setCounter(Number(e.target.value))
        e.target.value > 10 && setCounter(10)
        e.target.value < 1 && setCounter(1)
    }

    const counterHandler = num => setCounter(prevState => prevState + num)

    
    
    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={() => setCounter(5)}>RESET</button>

            <button onClick={gradesHandler}>SAVE</button>

            <input type='number' onInput={inputHandler} max={10} min={1} value={counter}></input>

            <button onClick={() => counterHandler(1)} disabled={counter > 9}>+</button>
            <button onClick={() => counterHandler(-1)} disabled={counter < 2}>-</button>

            <button onClick={() => counterHandler(2)} disabled={counter > 8}>+2</button>
            <button onClick={() => counterHandler(-2)} disabled={counter < 3}>-2</button>

            <button onClick={() => counterHandler(5)} disabled={counter > 5}>+5</button>
            <button onClick={() => counterHandler(-5)} disabled={counter < 6}>-5</button>

            <ul>{gradesList}</ul>
        </div>
    )
}

export default CounterPage