import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import styles from './UserInput.module.css'

const UserInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const userInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredValue)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Username</label>
        <input type="text" name="username" onChange={userInputChangeHandler} />
        <input type="int" name="age" onChange={userInputChangeHandler} />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  )
}

export default UserInput
