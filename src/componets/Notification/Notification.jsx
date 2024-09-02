import React, { useState } from 'react';
import classes from "./Notification.module.scss"

const Notification = ({ currentNotification = {}, onUpdateNotification }) => {
  const [weeklyNotifications, setWeeklyNotifications] = useState(currentNotification.weekly || false);
  const [ratingAnnouncements, setRatingAnnouncements] = useState(currentNotification.rating || false);

  const handleWeeklyChange = (e) => setWeeklyNotifications(e.target.checked);

  const handleRatingChange = (e) => setRatingAnnouncements(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateNotification({
      weekly: weeklyNotifications,
      rating: ratingAnnouncements
    });
  };

  return (
    <div className={classes.notificationBlock}>
      <h3>Уведомления</h3>
      <h2 className={classes.pubg}>Rateit будет отправлять вам уведомления</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="checkbox" 
            checked={weeklyNotifications} 
            onChange={handleWeeklyChange}
          />
          Получать еженедельные уведомления
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={ratingAnnouncements} 
            onChange={handleRatingChange}
          />
          Получать новые рейтинговые объявления
        </label>
      </form>
    </div>
  );
}

export default Notification;
