import React from 'react'
import classes from './Registration.module.scss'
import taxiCar from '../../assets/image/taxiCar.png'
import clientPage from '../../assets/image/clientPage.png'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div className={classes.Authorization}>
      <img src={taxiCar} alt='' />
      <div className={classes.block}>
        <h1>
          Регистрация
        </h1>
        <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </form>
      </div>
      <img src={clientPage} alt='' />
    </div>
  )
}

export default Registration
