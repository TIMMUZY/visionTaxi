import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './Menu.module.scss'

const MenuItem = ({ to, label, icon }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <div className={`${classes.menuItem} ${isActive ? classes.active : ''}`}>
      <Link to={to} className={isActive ? classes.activeLink : ''}>
        <div>
          <img src={icon} alt='' />
          {label}
        </div>
      </Link>
    </div>
  )
}

export default MenuItem
