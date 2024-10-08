import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileContext } from '../../../componets/ProfileContext/ProfileContext'
import classes from './Setting.module.scss'
import cheks from '../../../assets/icons/chekins.svg'
import Email from '../../../componets/EmailSide/Email'
import Notification from '../../../componets/Notification/Notification'

const Settings = () => {
  const navigate = useNavigate()
  const { profile, setProfile } = useContext(ProfileContext)
  const [showEmailPanel, setShowEmailPanel] = useState(false)
  const [showNotificationPanel, setShowNotificationPanel] = useState(false)
  const [isProfileRotated, setIsProfileRotated] = useState(false)
  const [isEmailRotated, setIsEmailRotated] = useState(false)
  const [isNotificationRotated, setIsNotificationRotated] = useState(false)

  const handleIconClick = () => {
    navigate('/profill')
    setIsProfileRotated(!isProfileRotated) // Rotate profile icon
  }

  const handleEmailClick = () => {
    setShowEmailPanel(!showEmailPanel)
    setIsEmailRotated(!isEmailRotated) // Rotate email icon
  }

  const handleNotificationClick = () => {
    setShowNotificationPanel(!showNotificationPanel)
    setIsNotificationRotated(!isNotificationRotated) // Rotate notification icon
  }

  const handleUpdateEmail = (newEmail) => {
    setProfile({ ...profile, email: newEmail })
    setShowEmailPanel(false)
  }

  const handleUpdateNotification = (notificationStatus) => {
    setProfile({ ...profile, notifications: notificationStatus })
    setShowNotificationPanel(false)
  }

  const handleLogoutClick = () => {
    navigate('/ ') // Change '/startpage' to your actual route
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainContent}>
          <div className={classes.blockcontainer}>
            <h3 className={classes.Importanttitle}>Управление пользователями</h3>
            <div className={classes.block}>
              <h3>Профиль</h3>
              <div>
                <p className={classes.checkprofill}>
                  {profile.name} {profile.surname} {profile.patronymic}
                </p>
                <img className={`${classes.check} ${isProfileRotated ? classes.rotate : ''}`} src={cheks} alt='' onClick={handleIconClick} />
              </div>
              <div className={classes.line}></div>
            </div>
            <div className={classes.block}>
              <h3>Почта</h3>
              <div>
                <h3 className={classes.title}>
                  Ваш адрес электронной почты:
                  <br /> {profile.email}
                </h3>
                <img className={`${classes.check} ${isEmailRotated ? classes.rotate : ''}`} src={cheks} alt='' onClick={handleEmailClick} />
              </div>
              <div className={classes.line}></div>
            </div>
            <div className={classes.block}>
              <h3>Уведомления</h3>
              <div>
                <h3 className={classes.title}>Rateit будет отправлять вам уведомления</h3>
                <img className={`${classes.check} ${isNotificationRotated ? classes.rotate : ''}`} src={cheks} alt='' onClick={handleNotificationClick} />
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
       
          </div>
        </div>
        {showEmailPanel && (
          <div className={classes.emailPanel}>
            <Email currentEmail={profile.email} onUpdateEmail={handleUpdateEmail} />
          </div>
        )}
        {showNotificationPanel && (
          <div className={classes.notificationPanel}>
            <Notification currentNotification={profile.notifications} onUpdateNotification={handleUpdateNotification} />
          </div>
        )}
      </div>
    </>
  )
}

export default Settings
