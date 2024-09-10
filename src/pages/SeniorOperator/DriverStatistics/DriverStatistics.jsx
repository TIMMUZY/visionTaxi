import React from 'react'
import classes from './DriverStatistics.module.scss'
import taga from '../../../assets/image/Rectangle.png'
import icon from '../../../assets/icons/iconaura.svg'
import icon1 from '../../../assets/icons/cartbank.svg'
import icon2 from '../../../assets/icons/agree.svg'
import icon3 from '../../../assets/icons/skeep.svg'
import icon4 from '../../../assets/icons/escape.svg'
import { useParams } from 'react-router-dom'
import Statistics from '../../Statistics/Statistics'

const DriverStatistics = () => {
  const { driverId } = useParams()
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2 className={classes.gojo}>Профиль Водителя</h2>
        <div className={classes.header2}>
          <h3>Статистика</h3>
          <h3>История водителя</h3>
        </div>
      </header>
      <div className={classes.container1}>
        <div className={classes.block}>
          <img className={classes.tari} src={taga} alt='' />
          <table className={classes.table}>
            <tr className={classes.tr}>
              <th className={classes.cours}>Имя:</th>
              <th className={classes.saw}>Алихан</th>
            </tr>
            <tr className={classes.tr}>
              <th className={classes.cours}>Дата рождения:</th>
              <th className={classes.saw}>12.12.1998</th>
            </tr>
            <tr className={classes.tr}>
              <th className={classes.cours}>Дата регистраци:</th>
              <th className={classes.saw}>15.08.2024</th>
            </tr>
            <tr className={classes.tr}>
              <th className={classes.cours}>Номер телефона:</th>
              <th className={classes.saw}>+996 558 003 404</th>
            </tr>
            <tr className={classes.tr}>
              <th className={classes.cours}>ID:</th>
              <th className={classes.saw}>1098723456876</th>
            </tr>
          </table>
        </div>
        <div className={classes.line}></div>
        <div>
          <h2 className={classes.mine}>О себе</h2>
          <input className={classes.input} type='text' placeholder='напишите текст...' />
        </div>
      </div>
      <div></div>
      <div className={classes.iconblock}>
        <div className={classes.iconStat}>
          <img src={icon} alt='icon' className={classes.icon} />
          <span className={classes.statText}>Оценка 5</span>
        </div>
        <div className={classes.iconState}>
          <img src={icon1} alt='icon' className={classes.icon1} />
          <span className={classes.statText}>Карта 0</span>
        </div>
        <div className={classes.iconState1}>
          <img src={icon2} alt='icon' className={classes.icon2} />
          <span className={classes.statText}>Принятые 23</span>
        </div>
        <div className={classes.iconState2}>
          <img src={icon3} alt='icon' className={classes.icon3} />
          <span className={classes.statText}>Пропуск заказа 7</span>
        </div>
        <div className={classes.iconState4}>
          <img src={icon4} alt='icon' className={classes.icon4} />
          <span className={classes.statText}>Отмена заказа 10</span>
        </div>
      </div>
      <Statistics />
    </div>
  )
}

export default DriverStatistics
