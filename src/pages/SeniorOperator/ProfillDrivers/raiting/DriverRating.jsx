import React from 'react'
import StarRatings from 'react-star-ratings'

const DriverRating = ({ driverId }) => {
  const rating = 3.4 // Устанавливаем рейтинг 3.5

  return (
    <div>
      <StarRatings
        rating={rating} // Отображаем рейтинг 3.5
        starRatedColor='gold'
        starEmptyColor='gray'
        numberOfStars={5}
        starDimension='20px'
        starSpacing='2px'
        isSelectable={false} // Рейтинг нельзя изменять
        name={`rating-${driverId}`}
      />
      <span> {rating}</span> {/* Отображаем значение рейтинга */}
    </div>
  )
}

export default DriverRating
