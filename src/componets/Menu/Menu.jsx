import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Menu.module.scss';

const MenuItem = ({ to, label, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div className={`${classes.menuItem} ${isActive ? classes.active : ''}`}>
      <Link to={to} className={isActive ? classes.activeLink : ''}>
        <div className={classes.icons}>
          <img src={icon} alt='' className={classes.icon} />
          <span className={classes.label}>{label}</span>
        </div>
      </Link>
      <div className={classes.hoverCircle}></div>
    </div>
  );
};

export default MenuItem;
