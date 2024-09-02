import React from 'react'
import { useNavigate } from 'react-router-dom' // Импортируем useNavigate
import classes from './Comfort.module.scss'
import comImg from '../../../assets/image/comfort.png'
import backback from '../../../assets/icons/backback.svg' // Импортируем иконку для кнопки назад

const Comfort = () => {
  const navigate = useNavigate() // Используем useNavigate для навигации

  const handleBackClick = () => {
    navigate('/InfoClients') // Навигация на страницу InfoClients
  }

  return (
    <div className={classes.Comfort}>
      <header className={classes.header}>
        <div className={classes.welcome}>
          <p className={classes.txt}>
            Welcome to <span className={classes.greenTxt}>Vission</span>
          </p>
        </div>
      </header>

      <div className={classes.economblock}>
        <img className={classes.economimg} src={comImg} alt='' />

        <div className={classes.text}>
          <div className={classes.clock}>
            <h2 className={classes.h2}>Комфорт-Класс</h2>
            <p className={classes.pipi}>
              Класс комфорт+ предлагает высокий уровень комфорта, который существенно превосходит класс эконом. В классе
              комфорт+ пассажиры наслаждаются более комфортабельным и приятным салоном с лучшими условиями для поездки.
              Но самое главное отличие в качестве автомобиля, годе выпуска и классе салона.
            </p>
          </div>
          <table className={classes.table}>
            <tr className={classes.tr}>
              <th>Тариф:</th>
              <th className={classes.saw}>Комфорт</th>
            </tr>
            <tr className={classes.tr}>
              <th>Стоимость:</th>
              <th className={classes.saw}>Зависит от растояние и от Регионов</th>
            </tr>
          </table>
        </div>
      </div>
      <button className={classes.backback} onClick={handleBackClick}>
        <img src={backback} alt='Back' />
        <p>Назад</p>
      </button>
    </div>
  )
}

export default Comfort
