import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button/Button'
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
          <footer className={classes.actions}>
            <Button>Okay</Button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal
