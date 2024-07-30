import React from "react";
import classes from "../Map/Map.module.scss";
import imagemap from "../../assets/image/map.jpeg";

const Map = () => {
  return (
    <div className={classes.contentMap}>
      <div className={classes.header}>
        <h2>Такси-Vision</h2>
        <h3>Главное меню . Карта водителей</h3>
      </div>
      <div>
        <img className={classes.map} src={imagemap} alt="" />
      </div>
    </div>
  );
};

export default Map;
