import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import ErrorModal from '../../UI/Modal/ErrorModal'
import styles from './UserInput.module.css'

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [error, setError] = useState()

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

  const errorHandler = () => {
    setError(null)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false)
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age over zero',
      })
      return
    }
    props.onAddUser(enteredName, enteredAge)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  )
}

export default UserInput
