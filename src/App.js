import React, { useState } from 'react'

import UserList from './components/Users/UserList/UserList'
import UserInput from './components/Users/UserInput/UserInput'
import './App.css'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Max', age: 31, id: 'g1' },
    { text: 'Jamie', age: 24, id: 'g2' },
  ])

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals]
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() })
      return updatedGoals
    })
  }

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId)
      return updatedGoals
    })
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  )

  if (courseGoals.length > 0) {
    content = <UserList items={courseGoals} onDeleteItem={deleteItemHandler} />
  }

  return (
    <div>
      <section id="goal-form">
        <UserInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  )
}

export default App
