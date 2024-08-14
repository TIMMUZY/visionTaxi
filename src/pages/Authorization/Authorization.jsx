import React from 'react'
import classes from './Authorization.module.scss'
import taxiCar from '../../assets/image/taxiCar.png'
import clientPage from '../../assets/image/clientPage.png'

const Authorization = () => {
  return (
    <div className={classes.Authorization}>
      <img src={taxiCar} alt='Taxi Car' />
      <div className={classes.block}>
        <h1>Авторизация</h1>
        <form className={classes.form}>
          <div className={classes.formGroup}>
            <label htmlFor='email'>Электронная почта</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor='phone'>Номер телефона</label>
            <input type='tel' id='phone' name='phone' required />
          </div>
          <div className={classes.formCode}>
            <label htmlFor='code'>Введите код</label>
            <div>
              <input type='text' id='code' name='code' disabled />
              <button type='button' className={classes.codeButton}>
                Получить Код
              </button>
            </div>
          </div>
          <div className={classes.formButton}>
            <button type='submit' disabled>
              Далее
            </button>
          </div>
        </form>
      </div>
      <img src={clientPage} alt='Client Page' />
    </div>
  )
}

export default Authorization
