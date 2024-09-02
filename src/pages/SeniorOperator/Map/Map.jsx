import React from "react";
import classes from "./Map.module.scss";
import imagemap from "../../../assets/image/map.jpeg";
import IconsDrivers from "../../../assets/icons/IconsDrivers.svg"
import client from "../../../assets/icons/client.svg"
import { Link } from "react-router-dom";

const Map = () => {
  return (
    <div className={classes.contentMap}>
      <div className={classes.header}>
        <h2 className={classes.navai}>Такси-<span className={classes.vision}>Vision</span></h2>
        <h3>Главное меню . Карта водителей</h3>
      </div>
      <div>
        <img className={classes.map} src={imagemap} alt="" />
      </div>
      <div>
      </div>
      <Link to="/MapCart">
      <div className={classes.block1}>
        <div className={classes.colBlock}> 
          <h2 className={classes.title}>Водитель</h2>
          <img className={classes.iconDrivers} src={IconsDrivers} alt="Иконка водителя" />
          <p className={classes.choose}>Нажмите для выбора!</p>
        </div>
        </div>
      </Link>
      <Link to="/MapCart" >
      <div className={classes.block2}>
        <div className={classes.colBlock1}> 
          <h2 className={classes.title1}>Клиент</h2>
          <img className={classes.iconDrivers1} src={client} alt="Иконка клиента" />
          <p className={classes.choose1}>Нажмите для выбора!</p>
        </div>
        </div>
      </Link>
    </div>
  );
};

export default Map;
