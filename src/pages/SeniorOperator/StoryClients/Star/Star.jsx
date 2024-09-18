import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa' // Иконка звезды из react-icons

const StarRating = () => {
  const [rating, setRating] = useState(0)

  const handleClick = (value) => {
    setRating(value)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px', fontSize: '16px' }}>{rating}/5</span>
      <FaStar
        size={25}
        color={rating >= 1 ? '#ffc107' : '#e4e5e9'}
        onClick={() => handleClick(rating < 5 ? rating + 1 : 0)}
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
}

export default StarRating
