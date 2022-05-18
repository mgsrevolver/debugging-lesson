import React from 'react'

import CourseGoalItem from '../UserItem/UserItem'
import './UserList.css'

const UserList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  )
}

export default UserList
