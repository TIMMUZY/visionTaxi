import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from "./ProfileCheck.module.scss";
import coco from "../../../assets/icons/notification.svg";
import proff from "../../../assets/image/proff.jpeg";
import proffi from "../../../assets/image/profill.png";
import change from "../../../assets/icons/edit.svg";

const ProfileCheck = () => {
  const navigate = useNavigate();

  const handleNavigateToPhotoChange = () => {
    navigate('/photochange');
  };

  return (
    <>
    <div className={classes.mainBlock}>
      <header className={classes.header}>
        <h3 className={classes.createpro}>
          Создание профиля Водителя
        </h3>
        <img className={classes.notific} src={coco} alt="Notification" />
        <img className={classes.proffo} src={proff} alt="Профиль" />
      </header>
      <div className={classes.line}></div>
      <div>
        <div className={classes.firstblock}>
          <img src={proffi} alt="Профиль" />
          <div className={classes.secondblock}>
            <h3 className={classes.name}>Джеки Чан</h3>
            <p className={classes.email}>alexarawles@gmail.com</p>
          </div>
          <button className={classes.changebtn}>
            <p>Изменить</p>
            <img className={classes.aura} src={change} alt="Изменить" />
          </button>
        </div>
        <div className={classes.importantblock}>
          <div className={classes.firstcont}>
            <div>
              <h3>Полное имя</h3>
              <input type="text" placeholder='Введите ваше полное имя' />
            </div>
            <div>
              <h3>Полную фамилию</h3>
              <input type="text" placeholder='Введите вашу фамилию' />
            </div>
            <div>
              <h3>Полное отчество</h3>
              <input type="text" placeholder='Введите ваше отчество' />
            </div>
            <div>
              <h3>Банковская карта</h3>
              <input type="text" placeholder='Введите банковскую карту' />
            </div>
            <div>
              <h3>Дата рождения</h3>
              <input type="number" placeholder='DD/MM/ГОД' />
            </div>
            <div>
              <h3>Страна выдачи ВУ</h3>
              <input type="text" placeholder='Введите страну' />
            </div>
          </div>
          <div className={classes.secondcont}>
            <div>
              <h3>Ваш номер</h3>
              <input type="number" placeholder='+996' />
            </div>
            <div>
              <h3>Дата выдачи ВУ</h3>
              <input className={classes.inputdate} type="date" />
            </div>
            <div>
              <h3>Класс машин</h3>
              <input type="text" placeholder='Выберите свой класс машин' />
            </div>
            <div>
              <h3>Серия и номер ВУ</h3>
              <input type="text" placeholder='Введите серию и номер ВУ' />
            </div>
            <div>
              <h3>Действует до</h3>
              <input className={classes.inputdate} type="date" />
            </div>
            <div className={classes.miniinfo}>
              <h2>Проверка Фото </h2>
              <button 
                className={classes.onlybtn} 
                onClick={handleNavigateToPhotoChange}
              >
                Перейти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProfileCheck;
