import React, { useState } from 'react'
import classes from './Registration.module.scss'
import taxiCar from '../../assets/image/taxiCar.png'
import clientPage from '../../assets/image/clientPage.png'

const Registration = () => {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [formError, setFormError] = useState('')

  const isFullNameValid = () => {
    const nameParts = fullName.trim().split(/\s+/)
    return nameParts.length === 3
  }

  const isFormValid = () => isFullNameValid() && phone && email

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value)
    setIsCodeSent(false) // Сбросить состояние отправки кода
    setFormError('') // Очистить ошибку при изменении
  }

  const handleSendCode = (event) => {
    event.preventDefault()

    if (!isFullNameValid()) {
      setFormError('Пожалуйста, заполните ФИО полностью.')
      return
    }

    fetch('https://example.com/api/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Code sent:', data)
        setIsCodeSent(true)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isFormValid()) {
      setFormError('Пожалуйста, заполните все поля корректно.')
      return
    }

    fetch('https://example.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, phone, email, code }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Registration successful:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <div className={classes.Registration}>
      <img src={taxiCar} alt='Taxi Car' />
      <div className={classes.block}>
        <h1>Регистрация</h1>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor='fullName'>Ф.И.О</label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={fullName}
              onChange={handleInputChange(setFullName)}
              required
            />
            {formError && <p className={classes.error}>{formError}</p>}
          </div>
          <div className={classes.formGroup}>
            <label htmlFor='phone'>Номер телефона</label>
            <input type='tel' id='phone' name='phone' value={phone} onChange={handleInputChange(setPhone)} required />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor='email'>Электронная почта</label>
            <input type='email' id='email' name='email' value={email} onChange={handleInputChange(setEmail)} required />
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
                onClick={handleSendCode}
                className={`${classes.codeButton} ${isFormValid() && !isCodeSent ? classes.active : ''}`}
              >
                Получить Код
              </button>
            </div>
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

export default Registration
