import React from 'react'
import classes from './SideModal.module.scss'

const SideModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <p>{message}</p>
        <div className={classes.modalButtons}>
          <button onClick={onConfirm}>Да</button>
          <button onClick={onCancel}>Нет</button>
        </div>
      </div>
    </div>
  )
}

export default SideModal
