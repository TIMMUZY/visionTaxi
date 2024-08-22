import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from "./PhotoChange.module.scss";
import photo from "../../assets/image/ChangePhoto.png";
import back from "../../assets/icons/backicon.svg";

const PhotoChange = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/profilecheck'); // Убедитесь, что маршрут совпадает с маршрутом ProfileCheck
  };

  return (
    <div>
      <div className={classes.displayphoto}>
        <div>
          <img src={photo} alt="Фото Водителя" />
          <h2>Фото Водителя</h2>
        </div>
        <div>
          <img src={photo} alt="Фото Водителя" />
          <h2>Фото Водителя</h2>
        </div>
        <div>
          <img src={photo} alt="Фото Водителя" />
          <h2>Фото Водителя</h2>
        </div>
      </div>
      <div className={classes.displayphoto}>
        <div>
          <img src={photo} alt="Фото Водителя" />
          <h2>Фото Водителя</h2>
        </div>
        <div>
          <img src={photo} alt="Фото Водителя" />
          <h2>Фото Водителя</h2>
        </div>
        <div>
          <img src={photo} alt="Фото Водителя" />
          <h2>Фото Водителя</h2>
        </div>
      </div>
      <div className={classes.displayphoto}>
        <div>
          <img src={photo} alt="Фото Водителя" />
          <h2>Фото Водителя</h2>
        </div>
        <div>
          <img src={photo} alt="Фото Водителя" />
          <h2>Фото Водителя</h2>
        </div>
        <div className={classes.chick}>
          <div className={classes.chico} onClick={handleBackClick}>
            <img src={back} alt="Назад" />
            <h2>Назад</h2>
          </div>
          <button className={classes.onlybtn}>Подтвердить</button>
        </div>
      </div>
    </div>
  );
};

export default PhotoChange;
