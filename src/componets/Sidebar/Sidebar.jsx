import React, { useContext } from 'react'
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
import { UserContext } from '../UserContext/UserContext'
import bell from '../../assets/icons/bell.svg'

const Sidebar = () => {
  const { role } = useContext(UserContext)

  // Определение класса для цвета текста в зависимости от роли
  const statusClass = (() => {
    switch (role) {
      case 'Старший оператор':
        return classes['senior-operator']
      case 'Младший оператор':
        return classes['junior-operator']
      case 'Партнер':
        return classes['partner']
      case 'Главный администратор':
        return classes['admin']
      default:
        return ''
    }
  })()

  return (
    <div className={classes.sidebar}>
      <div className={classes.profil}>
        <div className={classes.flex}>
          <div className={classes.circle}>
            <img src={profil} alt='profile' />
          </div>
          <div className={classes.profilInfo}>
            <div>
              <p>Иванов Иван Иванович</p>
              <p className={classes.phone}>+996774140282</p>
              <p className={`${classes.status} ${statusClass}`}>{role}</p>{' '}
              {/* Отображение роли с динамическим классом */}
            </div>
            <img src={bell} alt='' />
          </div>
        </div>
      </div>
      <p className={classes.mainManu}>Главное меню</p>
      <div className={classes.iconsBlock}>
        {/* Меню, доступное для всех ролей */}
        <Menu icon={info} to='/info' label='Информация' />
        {role === 'Старший оператор' && (
          <>
            <Menu icon={Checkicon} to='/check' label='Проверка' />
            <Menu icon={map} to='/map' label='Карта' />
            <Menu icon={drivers} to='/driver' label='Водители' />
            <Menu icon={modar} to='/moderation' label='Модерация' />
            <Menu icon={connect} to='/connection' label='Связь' />
            <Menu icon={setting} to='/setting' label='Настройки' />
          </>
        )}
        {role === 'Младший оператор' && <Menu icon={modar} to='/moderation' label='Модерация' />}
        {role === 'Партнер' && <Menu icon={connect} to='/connection' label='Связь' />}
        {role === 'Главный администратор' && (
          <>
            <Menu icon={setting} to='/setting' label='Настройки' />
            <Menu icon={drivers} to='/driver' label='Водители' />
          </>
        )}
      </div>
    </div>
  )
}

export default Sidebar
