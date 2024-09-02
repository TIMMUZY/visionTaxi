import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Information.module.scss';

const Information = ({ onBlockClick }) => {
  return (
    <div className={classes.Information}>
      <div className={classes.welcome}>
        <p className={classes.txt}>
          Wellcome to <span className={classes.greenTxt}>Vission</span>
        </p>
      </div>

      <div className={classes.infopeoples}>
        <h3 className={classes.service}>Сервисы</h3>
        <div className={classes.line}></div>
        <div className={classes.carts}>
          <Link to="/InfoClients" className={classes.clientsCart} onClick={onBlockClick}>
            <h3>Клиенты</h3>
          </Link>
          <Link to="/InfoClients" className={classes.driversCart} onClick={onBlockClick}>
            <h3>Водители</h3>
          </Link>
        </div>
        <div className={classes.carts2}>
          <h3 className={classes.service}>Инструменты</h3>
          <div className={classes.line}></div>
          <Link to="/InfoClients" className={classes.equpmentCart} onClick={onBlockClick}>
            <h3>Какие тарифы подходят моему Автомобилю?</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
