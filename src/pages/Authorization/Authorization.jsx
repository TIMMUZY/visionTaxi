import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import classes from './Authorization.module.scss'
import taxiCar from '../../assets/image/taxiCar.png'
import clientPage from '../../assets/image/clientPage.png'

const Authorization = () => {
  const [isCodeSent, setIsCodeSent] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      code: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Неверный формат email').required('Email обязателен'),
      phone: Yup.string().matches(/^\+?[0-9\s]{10,16}$/, 'Номер телефона должен быть от 10 до 16 цифр и может содержать пробелы и символ "+"').required('Телефон обязателен'),
      code: Yup.string().when('isCodeSent', {
        is: true,
        then: Yup.string().required('Код обязателен'),
      }),
    }),
    onSubmit: (values) => {
      // Логика отправки формы
      console.log('Form data', values)
    },
  })

  const handleSendCode = () => {
    if (formik.isValid && formik.dirty) {
      // Логика отправки кода на сервер
      setIsCodeSent(true)
      formik.setFieldValue('code', '') // Очистка поля кода
    }
  }

  const isCodeButtonActive = formik.isValid && !isCodeSent && formik.dirty;
  const isSubmitButtonActive = isCodeSent && formik.values.code.trim() !== '' && formik.isValid;

  return (
    <div className={classes.Authorization}>
      <img src={taxiCar} alt='Taxi Car' />
      <div className={classes.block}>
        <h1>Авторизация</h1>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor='email'>Электронная почта</label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={classes.error}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={classes.formGroup}>
            <label htmlFor='phone'>Номер телефона</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className={classes.error}>{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className={classes.formCode}>
            <label htmlFor='code'>Введите код</label>
            <div>
              <input
                type='text'
                id='code'
                name='code'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.code}
                disabled={!isCodeSent}
              />
              <button
                type='button'
                onClick={handleSendCode}
                className={`${classes.codeButton} ${isCodeButtonActive ? classes.active : ''}`}
              >
                Получить Код
              </button>
            </div>
          </div>
          <div className={classes.formButton}>
            <button
              type='submit'
              disabled={!isSubmitButtonActive}
              className={`${classes.submitButton} ${isSubmitButtonActive ? classes.active : ''}`}
            >
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
