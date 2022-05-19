import React, { useState } from 'react'

import UserList from './components/Users/UserList/UserList'
import UserInput from './components/Users/UserInput/UserInput'
import './App.css'

const App = () => {
  const [Users, setUsers] = useState([
    { text: 'Max', age: 31, id: 'g1' },
    { text: 'Jamie', age: 24, id: 'g2' },
  ])

  const addUserHandler = (enteredText, enteredAge) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers]
      updatedUsers.unshift({
        text: enteredText,
        age: enteredAge,
        id: Math.random().toString(),
      })
      return updatedUsers
    })
  }

  const deleteItemHandler = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId)
      return updatedUsers
    })
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  )

  if (Users.length > 0) {
    content = <UserList items={Users} onDeleteItem={deleteItemHandler} />
  }

  return (
    <div>
      <section id="user-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="users">{content}</section>
    </div>
  )
}

export default App
