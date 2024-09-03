import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../../componets/ProfileContext/ProfileContext';
import classes from "./Profill.module.scss";
import backround from "../../../assets/image/backround.png";
import proff from "../../../assets/image/profill.png";

const Profill = () => {
  const navigate = useNavigate(); 
  const { profile, setProfile } = useContext(ProfileContext); 

  const [name, setName] = useState(profile.name);
  const [surname, setSurname] = useState(profile.surname);
  const [patronymic, setPatronymic] = useState(profile.patronymic);
  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);
  const [street, setStreet] = useState(profile.street);
  const [carClass, setCarClass] = useState(profile.carClass);

  const handleSave = () => {
    setProfile({
      ...profile,
      name,
      surname,
      patronymic,
      phoneNumber,
      street,
      carClass,
    });
    navigate('/setting'); 
  };

  return (
    <div className={classes.mainBlock}>
      <header className={classes.header}><img className={classes.backr} src={backround} alt="" /></header>
      <div>
        <div className={classes.firstblock}>
          <img src={proff} alt="" />
          <div className={classes.secondblock}>
            <h3>{profile.name} {profile.surname}</h3>
            <p>{profile.email}</p>
          </div>
        </div>
        <div className={classes.allinputs}>
          <div className={classes.firstinput}>
            <div>
              <h3>Имя</h3>
              <input 
                type="text" 
                placeholder='Введите ваше полное имя' 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <h3>Фамилия</h3>
              <input 
                type="text" 
                placeholder='Введите вашу фамилию' 
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div>
              <h3>Отчество</h3>
              <input 
                type="text" 
                placeholder='Введите ваше отчество' 
                value={patronymic}
                onChange={(e) => setPatronymic(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.secondinput}>
            <div>
              <h3>Ваш номер</h3>
              <input 
                type="number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <h3>Местоположение</h3>
              <label className={classes.selectWrapper}>
                <select 
                  className={classes.boxTitle} 
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                >
                  <option className={classes.zagolovok} value=''>Название улицы</option>
                  <option className={classes.select} value='кулатова'>кулатова</option>
                </select>
              </label>
            </div>
            <div>
              <h3>Класс машин</h3>
              <label className={classes.selectWrapper}>
                <select 
                  className={classes.boxTitle} 
                  value={carClass}
                  onChange={(e) => setCarClass(e.target.value)}
                >
                  <option className={classes.zagolovok} value=''>Выберите свой класс машин</option>
                  <option className={classes.select} value='кулатова'>кулатова</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <button className={classes.savebtn} onClick={handleSave}>Сохранить</button>
      </div>
    </div>
  )
}

export default Profill;
