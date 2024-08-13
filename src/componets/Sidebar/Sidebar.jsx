import React from 'react'
import Menu from '../Menu/Menu'
import classes from './Sidebar.module.scss'
import profil from '../../assets/image/proff.jpeg'
import info from '../../assets/icons/info.svg'
import map from '../../assets/icons/Map.svg'
import drivers from '../../assets/icons/Drivers.svg'
import modar from '../../assets/icons/Modar.svg'
import connect from '../../assets/icons/Connect.svg'
import Checkicon from '../../assets/icons/Checkicon.svg'
import setting from '../../assets/icons/Setting.svg'

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.profil}>
        <div className={classes.flex}>
          <div className={classes.circle}>
            <img src={profil} alt='profile' />
          </div>
          <div className={classes.profilInfo}>
            <p>Иванов Иван Иванович</p>
            <p className={classes.phone}>+996774140282</p>
            <p className={classes.status}>Старший oператор </p>
          </div>
        </div>
      </div>
      <p className={classes.mainManu}>Главное меню</p>
      <div className={classes.iconsBlock}>
        <Menu icon={info} to='/info' label='Информация' />
        <Menu icon={Checkicon} to='/check' label='Проверка' />
        <Menu icon={map} to='/map' label='Карта' />
        <Menu icon={drivers} to='/driver' label='Водители' />
        <Menu icon={modar} to='/moderation' label='Модерация' />
        <Menu icon={connect} to='/connection' label='Связь' />
        <Menu icon={setting} to='/setting' label='Настройки' />
      </div>
    </div>
  )
}

export default Sidebar
