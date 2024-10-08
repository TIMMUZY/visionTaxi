import React, { useContext, useState } from 'react'
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
import Back from '../../assets/icons/Back.svg'
import { useNavigate } from 'react-router-dom'
import SideModal from '../SideModal/SideModal'

const Sidebar = () => {
  const { role } = useContext(UserContext)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    setShowModal(true)
  }

  const handleConfirmLogout = () => {
    setShowModal(false)
    navigate('/')
  }

  const handleCancelLogout = () => {
    setShowModal(false)
  }

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
    <>
      <div className={classes.sidebar}>
        <div className={classes.profil}>
          <div className={classes.flex}>
            <img src={profil} alt='profile' />
            <div className={classes.profilInfo}>
              <p className={classes.name}>Алиханов Алихан Алиханович</p>
              <p className={`${classes.status} ${statusClass}`}>{role}</p>
            </div>
          </div>
        </div>
        <div className={classes.iconsBlock}>
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
        <button onClick={handleLogoutClick} className={classes.btn}>
          <img src={Back} alt="" />
          <p>Выход</p>
        </button>

        {showModal && (
          <SideModal
            message="Вы уверены, что хотите выйти?"
            onConfirm={handleConfirmLogout}
            onCancel={handleCancelLogout}
          />
        )}
      </div>
      <div className={classes.contentOverlay}></div>
    </>
  )
}

export default Sidebar
