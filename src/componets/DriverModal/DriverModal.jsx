import React, { useState } from 'react'
import { Modal } from 'antd'
import classes from './DriverModal.module.scss'

const DriverModal = ({ isVisible, driver, onClose }) => {
  const [activeDirection, setActiveDirection] = useState('Списание')

  const handleDirectionChange = (direction) => {
    setActiveDirection(direction)
  }

  return (
    <>
      <Modal title={<div className={classes.modalTitle}>Выплаты и списание</div>} visible={isVisible} onCancel={onClose} footer={null}>

        {driver && (
          <div className={classes.modalContent}>
            <div className={classes.driverInfo}>
              <p>
                Ф.И.О: <strong>{driver.name}</strong>
              </p>
              <p>
                ID:<strong>{driver.id}</strong>
              </p>
              <p>
                <span>Номер телефона:</span> <strong>{driver.phone}</strong>
              </p>
              <p>
                <span>Гос. номер: </span> <strong>{driver.carNumber}</strong>
              </p>
              <p>
                <span>Модель машины:</span>
                <strong>{driver.carModel}</strong>
              </p>
              <p>
                Баланс и лимит:
                <strong>
                  <span className={classes.balance}>{driver.balance}</span> /{' '}
                  <span className={classes.limit}>{driver.limit}</span>сoм
                </strong>
              </p>
              <p>
                <span>Способ платежа:</span>
                <select className={classes.boxTitle}>
                  <option className={classes.zagolovok} value=''>
                    Наличные
                  </option>
                  <option value=''>Перевод</option>
                </select>
              </p>
              <p className={classes.directionContainer}>
                <span>Направление:</span>
                <button
                  className={`${classes.directionButton} ${activeDirection === 'Списание' ? classes.active : ''}`}
                  onClick={() => handleDirectionChange('Списание')}
                >
                  Списание
                </button>
                <button
                  className={`${classes.directionButton} ${activeDirection === 'Пополнение' ? classes.active : ''}`}
                  onClick={() => handleDirectionChange('Пополнение')}
                >
                  Пополнение
                </button>
              </p>
              <input className={classes.text} type='text' placeholder='Написать сумму...' />
            </div>
            <textarea className={classes.commentBox} placeholder='Оставить комментарий...' />
            <div className={classes.modalFooter}>
              <button className={classes.cancelButton} onClick={onClose}>
                Отмена
              </button>
              <button className={classes.submitButton}>Сохранить</button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default DriverModal
