import React from 'react'
import classes from './NotFound.module.scss'
import { useNavigate } from 'react-router-dom'
import seaterWoman from '../../assets/image/seaterWoman.png'
import manSeater from '../../assets/image/manSeater.png'
import goBack from '../../assets/icons/goBack.svg'

const NotFound = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    }
  }

  return (
    <>
      <div className={classes.NotFound}>
        <div className={classes.head}>
          <button onClick={handleGoBack}>
            <img src={goBack} alt='Go Back' />
            <span>Go Back</span>
          </button>
          <p>Oops!</p>
        </div>
        <div className={classes.fonImg}>
          <p>You are lost</p>
          <h1>404</h1>
          <div>
            <img src={seaterWoman} alt='Seater Woman' />
            <img src={manSeater} alt='Man Seater' />
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
