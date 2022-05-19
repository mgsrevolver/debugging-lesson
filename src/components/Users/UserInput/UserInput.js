import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import styles from './UserInput.module.css'

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [isValid, setIsValid] = useState(true)

  const nameInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredName(event.target.value)
  }

  const ageInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredAge(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (enteredName.trim().length === 0) {
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredName)
    props.onAddGoal(enteredAge)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Username</label>
        <input type="text" name="username" onChange={nameInputChangeHandler} />
        <input type="int" name="age" onChange={ageInputChangeHandler} />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  )
}

export default UserInput
