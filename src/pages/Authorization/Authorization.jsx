import React from 'react'
import classes from './Authorization.module.scss'
import taxiCar from '../../assets/image/taxiCar.png'
import clientPage from '../../assets/image/clientPage.png'

const Authorization = () => {
  return (
    <div className={classes.Authorization}>
      <img src={taxiCar} alt='' />
      <div className={classes.block}>
        <h1>
          Такси - <span className={classes.colorGreen}>VISSION</span>
        </h1>
        <div>
          <button><p>Авторизация</p></button>
          <button><p>Регистрация</p></button>
          <select className={classes.select}>
            <option value="ru">Русский</option>
            <option value="en">English</option>
            <option value="kg">Кыргызча</option>
          </select>
        </div>
      </div>
      <img src={clientPage} alt='' />
    </div>
  )
}

export default Authorization
