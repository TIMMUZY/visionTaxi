import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Menu.module.scss'

const Menu = ({ to, label }) => {
  return (
    <div className={classes.menu}>
      <Link to={to}>{label}</Link>
    </div>
  )
}
  
export default Menu