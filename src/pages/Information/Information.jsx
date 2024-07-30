import React from 'react'
import classes from './Information.module.scss'

const Information = () => {
  return (
    <div className={classes.Information}>
      <div className={classes.welcome}>
        <p className={classes.txt}>
          Wellcome to <span className={classes.greenTxt}>Vission</span>
        </p>
      </div>
      <div className={classes.infoText}>
        <h3>Что такое скрипт разговора?</h3>
        <p></p>
      </div>
    </div>
  )
}

export default Information
