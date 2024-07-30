import Menu from '../Menu/Menu'
import classes from '../Sidebar/Sidebar.module.scss'
import profil from './assets/images/proff.jpeg'
import Setting from './assets/icons/Setting.svg'

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
      <div>
        <Menu to='/info' label='Информация' />
        <Menu to='/map' label='Карта' />
        <Menu to='/driver' label='Водители' />
        <Menu to='/order' label='Модерация' />
        <Menu to='/connection' label='Связь' />
        <Menu icon={Setting} to='/settings' label='Настройки' />
      </div>
    </div>
  )
}

export default Sidebar
