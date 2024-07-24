import React from 'react'
import classes from './Menu.module.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className={classes.Menu}>
      <nav className={classes.heady}>
        <div>
          <Link to='/'>Приборная понель</Link>
        </div>
      </nav>
    </div>
  )
}

export default Menu
