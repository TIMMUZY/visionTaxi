import React from 'react'
import classes from './NotFound.module.scss'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  React.useEffect(() => {
    navigate('/not-found')
  }, [navigate])

  return (
    <div className={classes.NotFound}>
      <h1>Oops!</h1>
      <div className={classes.fonImg}>
        <p>You are lost</p>
      </div>
    </div>
  )
}

export default NotFound
