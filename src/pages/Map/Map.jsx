import React from "react";
import classes from "../Map/Map.module.scss";
import imagemap from "../../assets/image/map.jpeg";
import IconsDrivers from "../../assets/icons/IconsDrivers.svg"
import client from "../../assets/icons/client.svg"

const Map = () => {
  return (
    <div className={classes.contentMap}>
      <div className={classes.header}>
        <h2>Такси-<span className={classes.vision}>Vision</span></h2>
        <h3>Главное меню . Карта водителей</h3>
      </div>
      <div>
        <img className={classes.map} src={imagemap} alt="" />
      </div>
      <div>
      </div>
        <div className={classes.block1}>
          <div className={classes.colBlock}> 
          <h2 className={classes.title}>Водитель</h2>
          <img className={classes.iconDrivers} src={IconsDrivers} alt="" />
          <p className={classes.choose}>Нажмите для выбора!</p>
          </div>
        </div>
        <div className={classes.block2}>
          <div className={classes.colBlock1}> 
          <h2 className={classes.title1}>Клиент</h2>
          <img className={classes.iconDrivers1} src={client} alt="" />
          <p className={classes.choose1}>Нажмите для выбора!</p>
          </div>
        </div>
    </div>
  );
};

export default Map;
