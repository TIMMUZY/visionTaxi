import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../pages/ProfileContext/ProfileContext';
import classes from './Setting.module.scss';
import cheks from "../../assets/icons/chekins.svg";
import exit from "../../assets/icons/exit.svg";
import Email from '../EmailSide/Email';  

const Settings = () => {
  const navigate = useNavigate();
  const { profile, setProfile } = useContext(ProfileContext);
  const [showEmailPanel, setShowEmailPanel] = useState(false); 

  const handleIconClick = () => {
    navigate('/profill');
  };

  const handleEmailClick = () => {
    setShowEmailPanel(!showEmailPanel); 
  };

  const handleUpdateEmail = (newEmail) => {
 
    setProfile({ ...profile, email: newEmail });
    setShowEmailPanel(false);  
  };

  return (
    <div className={classes.container}>
      <div className={classes.mainContent}>
        <div className={classes.blockcontainer}>
          <h3 className={classes.Importanttitle}>Управление пользователями</h3>
          <div className={classes.block}>
            <h3>Профиль</h3>
            <div>
              <p>{profile.name} {profile.surname} {profile.email} {profile.patronymic}</p>
              <img className={classes.check} src={cheks} alt="" onClick={handleIconClick} />
            </div>
            <div className={classes.line}></div>
          </div>
          <div className={classes.block}>
            <h3>Почта</h3>
            <div>
              <h3 className={classes.title}>Ваш адрес электронной почты:<br /> {profile.email}</h3>
              <img className={classes.check} src={cheks} alt="" onClick={handleEmailClick} />
            </div>
            <div className={classes.line}></div>
          </div>
          <div className={classes.block}>
            <h3>Уведомления</h3>
            <div>
              <h3 className={classes.title}>Rateit будет отправлять вам уведомления</h3>
              <img className={classes.check} src={cheks} alt="" />
            </div>
            <div className={classes.line}></div>
          </div>
          <div className={classes.block}>
            <h3>Deactive account</h3>
            <div>
              <h3 className={classes.title}>Если хотите удалить аккаунт</h3>
              <button className={classes.btn}>Деактивация</button>
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
      {showEmailPanel && (
        <div className={classes.emailPanel}>
          <Email
            currentEmail={profile.email}
            onUpdateEmail={handleUpdateEmail}
          />
        </div>
      )}
    </div>
  );
};

export default Settings;
