import React, { useState } from 'react'
import './StudentPage.css'
import StudentItem from '../components/StudentList/StudentItem'

const StudentPage = () => {
    const [students, setStudents] = useState([])

    const [data, setData] = useState({
        name: '',
        surname: '',
        age: '',
        phone: '',
        email: '',
        knowledge: '',
        group: '',
        languages: [],
        id: '',
    })

    const [isEditing, setIsEditing] = useState(null)

    const [formNotValid, setFormNotValid] = useState(false)

    const [nameNotValid, setNameNotValid] = useState(null)
    const [surnameNotValid, setSurameNotValid] = useState(null)
    const [ageNotValid, setAgeNotValid] = useState(null)
    const [phoneNotValid, setPhoneNotValid] = useState(null)
    const [emailNotValid, setEmailNotValid] = useState(null)

    const studentsHandler = (e) => {
        e.preventDefault()
        setNameNotValid(null)
        setSurameNotValid(null)
        setAgeNotValid(null)
        setPhoneNotValid(null)
        setEmailNotValid(null)
        setFormNotValid(false)

        if (data.name.length < 3 ) {
            setNameNotValid('Vardas privalo būti bent 3 simbolių ilgumo')
            setFormNotValid(true)
        } else {
            setFormNotValid(false)
        }

        if (data.surname.length < 3) {
            setSurameNotValid('Pavardė privalo būti bent 3 simbolių ilgumo')
            setFormNotValid(true)
        }

        if (data.age <= 0) {
            setAgeNotValid('Amžius privalo būti teigiamas skaičius')
            setFormNotValid(true)
        } else if (data.age > 120) {
            setAgeNotValid('Įvestas amžius yra per didelis')
            setFormNotValid(true)
        }

        if (data.phone.length < 9 || data.phone.length > 12) {
            setPhoneNotValid('Įvestas telefono numeris yra neteisingas')
            setFormNotValid(true)
        }
        
        if (data.email.length < 8 || !data.email.includes('@')) {
            setEmailNotValid('Įvestas elektroninis paštas yra neteisingas')
            setFormNotValid(true)
        }
        console.log('aaa');
        console.log(formNotValid)
        
        if (formNotValid) {
            return
        }


        if (isEditing) {
            let itemIndex = students.findIndex(item => item.id === isEditing)

            setStudents(prevState => {
                let newState = [...prevState]

                newState[itemIndex] = {
                    name: data.name,
                    surname: data.surname,
                    age: data.age,
                    phone: data.phone,
                    email: data.email,
                    knowledge: data.knowledge,
                    group: data.group,
                    languages: data.languages,
                    id: Math.random()
                }
                return newState
            })  
            setIsEditing(null) 
        } else {
            setStudents(prevState => {

                let newStudent = {
                    ...data,
                    id: Math.random()
                }
                return [newStudent, ...prevState]
            })        
        }
    

        
        setData(prevState => {
            let newState = {...prevState}
            newState = {
                name: '',
                surname: '',
                age: '',
                phone: '',
                email: '',
                knowledge: '',
                group: '',
                languages: [],
                id: ''
            }
            return newState
        })
    }


    const deleteHandler = (id) => {
        setStudents(prevState => {
            let newState = [...prevState]
            return newState.filter(item => item.id !== id)
        })
    }

    const editHandler = (id) => {
        let itemIndex = students.findIndex(item => item.id === id)
        setIsEditing(id)

        setData(prevState => {
            let newState = {...prevState}
            newState = {
                name: students[itemIndex].name,
                surname: students[itemIndex].surname,
                age: students[itemIndex].age,
                phone: students[itemIndex].phone,
                email: students[itemIndex].email,
                knowledge: students[itemIndex].knowledge,
                group: students[itemIndex].group,
                languages: students[itemIndex].languages,
                id: students[itemIndex].id
            }
            return newState
        })
    }
    
    let studentList = students.map((student, i) => {
        return <StudentItem
            key={i}
            item={student}
            onDelete={deleteHandler}
            onEdit={editHandler}
            formNotValid={formNotValid}
        />
    })


    const formChangeHandler = (e) => {
        setData(prevState => {
            let newState = {...prevState}
            newState[e.target.name] = e.target.value
            return newState
        })
    }


    const checkboxInputsHandler = (e) => {
        console.log(data.languages);

        setData(prevState => {
            let newState = {...prevState}
            
            if (newState.languages && newState.languages.includes(e.target.value)) {
                newState.languages = [...newState.languages].filter(language => language != e.target.value)
                return newState
            } else {
                return {...prevState, languages: [...prevState.languages, e.target.value]}
            }
        })
    }

    let groupElements = []
    for (let i = 1; i <= 10; i++) {
        groupElements.push(<div key={i}>
            <input type="radio" value={`IT ${i}gr.`} id={`group${i}-id`} name='group' checked={data.group == `IT ${i}gr.`} onChange={formChangeHandler}/>
            <label htmlFor={`group${i}-id`}>IT {i}gr.</label>
        </div>)
    }

    let languages = ['Python', 'JavaScript', 'Java', 'C++', 'SQL']
    let languageElements = languages.map((language, i) => (
        <div key={i}>
            <input type="checkbox" name="language" id={`${language}-id`} value={language} checked={data.languages && data.languages.includes(language)} onChange={checkboxInputsHandler}/>
            <label htmlFor={`${language}-id`} >{language}</label>
        </div>
    ))


    return (
    <div>
        <form id="student-form" onSubmit={studentsHandler}>
            <div>
                <div className={nameNotValid && 'error'}>
                    <label htmlFor="name-id">First name:</label>
                    <input type="text" name="name" id="name-id" value={data.name} onChange={formChangeHandler}/>
                    {nameNotValid && <span>{nameNotValid}</span>}
                </div>
                <div className={surnameNotValid && 'error'}>
                    <label htmlFor="surname-id">Last name:</label>
                    <input type="text" name="surname" id="surname-id" value={data.surname} onChange={formChangeHandler}/>
                    {surnameNotValid && <span>{surnameNotValid}</span>}
                </div>
                <div className={ageNotValid && 'error'}>
                    <label htmlFor="age-id">Age:</label>
                    <input type="number" name="age" id="age-id" value={data.age} onChange={formChangeHandler}/>
                    {ageNotValid && <span className='error'>{ageNotValid}</span>}
                </div>
                <div className={phoneNotValid && 'error'}>
                    <label htmlFor="phone-id">Phone number:</label>
                    <input type="tel" name="phone" id="phone-id" value={data.phone} onChange={formChangeHandler}/>
                    {phoneNotValid && <span className='error'>{phoneNotValid}</span>}
                </div>
                <div className={emailNotValid && 'error'}>
                    <label htmlFor="email-id">Email:</label>
                    <input type="email" name="email" id="email-id" value={data.email} onChange={formChangeHandler}/>
                    {emailNotValid && <span className='error'>{emailNotValid}</span>}
                </div>
                <div >
                    <label htmlFor="knowledge-id">Programming knowledge:</label>
                    <input type="range" name="knowledge" id="knowledge-id" min="1" max="10" step="1" value={data.knowledge} onChange={formChangeHandler}/>
                </div>
            </div>
            
            <fieldset className='groups'>
                <legend>IT groups:</legend>
                <div className='group-inputs'>
                    {groupElements}
                </div>
            </fieldset>
            
            <fieldset >
                <legend>Programming language of interest:</legend>
                {languageElements}
            </fieldset>
            <input type="submit"/>
        </form>
        {formNotValid && <span>Forma netinkamai užpildyta</span>}
    
        <ol className='student-list' reversed>{studentList}</ol>
    </div>
  )
}

export default StudentPage