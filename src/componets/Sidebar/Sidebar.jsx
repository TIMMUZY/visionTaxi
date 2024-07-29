import Menu from '../Menu/Menu'
import classes from '../Sidebar/Sidebar.module.scss'
import profil from "./assets/images/proff.jpeg"

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
            <p className={classes.status}>Старший Оператор</p>
          </div>
        </div>
      </div>
      <div>
        <Menu to='/driver' label='Водители' />
        <Menu to='/order' label='Заказы' />
      </div>
    </div>
  )
}

export default Sidebar
