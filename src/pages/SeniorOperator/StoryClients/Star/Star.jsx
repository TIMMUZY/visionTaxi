import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa' // Иконка звезды из react-icons

const StarRating = () => {
  const [rating, setRating] = useState(0)

  // Функция для обработки клика
  const handleClick = (value) => {
    setRating(value) // Установка рейтинга
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px', fontSize: '16px' }}>{rating}.5</span>
      <FaStar
        size={25}
        color={rating >= 1 ? '#ffc107' : '#e4e5e9'}
        onClick={() => handleClick(rating < 5 ? rating + 1 : 0)} // Увеличение или сброс при клике
        style={{ cursor: 'pointer' }}
      />
      {/* Показ текущего рейтинга */}
    </div>
  )
}

export default StarRating
