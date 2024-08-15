import React, { useState } from 'react'
import classes from './Authorization.module.scss'
import taxiCar from '../../assets/image/taxiCar.png'
import clientPage from '../../assets/image/clientPage.png'

const Authorization = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [formError, setFormError] = useState('')

  const isFormValid = () => {
    return email && phone
  }

  const handleSendCode = (event) => {
    event.preventDefault()

    if (!isFormValid()) {
      setFormError('Пожалуйста, заполните все поля.')
      return
    }

    // Логика отправки кода на сервер
    console.log('Отправка кода на номер:', phone)
    setIsCodeSent(true)
    setFormError('') // Очистить ошибку после успешной отправки кода
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Логика отправки данных на сервер
    console.log('Отправка данных:', { email, phone, code })
  }

  return (
    <div className={classes.Authorization}>
      <img src={taxiCar} alt='Taxi Car' />
      <div className={classes.block}>
        <h1>Авторизация</h1>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor='email'>Электронная почта</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setFormError('')
              }}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor='phone'>Номер телефона</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
                setFormError('')
              }}
              required
            />
          </div>
          <div className={classes.formCode}>
            <label htmlFor='code'>Введите код</label>
            <div>
              <input
                type='text'
                id='code'
                name='code'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                disabled={!isCodeSent}
              />
              <button
                type='button'
                className={`${classes.codeButton} ${isFormValid() && !isCodeSent ? classes.active : ''}`}
                onClick={handleSendCode}
              >
                Получить Код
              </button>
            </div>
            {formError && <p className={classes.error}>{formError}</p>}
          </div>
          <div className={classes.formButton}>
            <button type='submit' disabled={!isCodeSent}>
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
