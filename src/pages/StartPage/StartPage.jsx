import React from 'react'
import classes from './StartPage.module.scss'
import taxiCar from '../../assets/image/taxiCar.png'
import clientPage from '../../assets/image/clientPage.png'
import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <div className={classes.Authorization}>
      <img src={taxiCar} alt='' />
      <div className={classes.block}>
        <h1>
          Такси - <span className={classes.colorGreen}>VISSION</span>
        </h1>
        <div>
          <Link to={'/authorization'} className={classes.link}>
            <button>
              Авторизация
            </button>
          </Link>
          <Link to={'/registration'} className={classes.link}>
            <button>
              Регистрация
            </button>
          </Link>
          <select className={classes.select}>
            <option value='ru'>Русский</option>
            <option value='en'>English</option>
            <option value='kg'>Кыргызча</option>
          </select>
        </div>
      </div>
      <img src={clientPage} alt='' />
    </div>
  )
}

export default StartPage
