import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const DriverRating = ({ driverId, initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  // Функция для обновления рейтинга водителя
  const changeRating = (newRating) => {
    setRating(newRating); // Обновляем рейтинг для конкретного водителя
  };

  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      starEmptyColor="gray" // Цвет для "обычных" звезд
      numberOfStars={5}
      starDimension="20px"
      starSpacing="2px"
      changeRating={changeRating} // Обработчик клика
      name={`rating-${driverId}`}
    />
  );
};

export default DriverRating;
