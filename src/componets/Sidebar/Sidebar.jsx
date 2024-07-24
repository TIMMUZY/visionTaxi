import Menu from '../Menu/Menu'
import classes from '../Sidebar/Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Menu to="/" label="Приборная панель" />
      <Menu to="/driver" label="Водители" />
    </div>
  )
}

export default Sidebar