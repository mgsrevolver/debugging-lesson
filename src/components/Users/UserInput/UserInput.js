import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import ErrorModal from '../../UI/Modal/ErrorModal'
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
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false)
      return <ErrorModal />
    }
    props.onAddUser(enteredName, enteredAge)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={nameInputChangeHandler}
        />
      </div>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <input
          type="int"
          name="age"
          placeholder="Age (Years)"
          onChange={ageInputChangeHandler}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  )
}

export default UserInput
