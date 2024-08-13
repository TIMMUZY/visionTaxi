import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import classes from './Setting.module.scss';
import cheks from "../../assets/icons/chekins.svg";
import exit from "../../assets/icons/exit.svg";

const Settings = () => {
  const navigate = useNavigate(); 

  const handleIconClick = () => {
    navigate('/profill'); 
  };

  return (
    <div className={classes.conntiner}>
      <div className={classes.blockcontainer}>
        <h3 className={classes.Importanttitle}>Управление пользователями</h3>
        <div className={classes.block}>
          <h3>Профиль</h3>
          <div>
            <h3 className={classes.title}>Имя, фамилия, адрес электронной почты</h3>
            <img className={classes.check} src={cheks} alt="" onClick={handleIconClick} />
          </div>
          <div className={classes.line}></div>
        </div>
        <div className={classes.block}>
          <h3>Почта</h3>
          <div>
            <h3 className={classes.title}>Ваш адрес электронной почты:<br /> dmataraci@gmail.com</h3>
            <img className={classes.check} src={cheks} alt="" onClick={handleIconClick} />
          </div>
          <div className={classes.line}></div>
        </div>
        <div className={classes.block}>
          <h3>Уведомления</h3>
          <div>
            <h3 className={classes.title}>Rateit будет отправлять вам уведомления</h3>
            <img className={classes.check} src={cheks} alt="" onClick={handleIconClick} /> 
          </div>
          <div className={classes.line}></div>
        </div>
        <div className={classes.block}>
          <h3>Deactive account</h3>
          <div>
            <h3 className={classes.title}>Если хотите удалить аккаунт</h3>
            <button className={classes.btn}>Дэактивация</button>
          </div>
          <div className={classes.line}></div>
        </div>
        <div className={classes.blockDop}>
          <img className={classes.exits} src={exit} alt="" />
          <h3 className={classes.titlel}>Выйти с аккаунта</h3>
        </div>
        <div className={classes.line1}></div>
      </div>
    </div>
  );
};

export default Settings;
