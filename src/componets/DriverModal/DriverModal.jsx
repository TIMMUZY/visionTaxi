import React from 'react'
import { Modal } from 'antd'
import classes from './DriverModal.module.scss'

const DriverModal = ({ isVisible, driver, onClose }) => {
  return (
    <Modal
      title={<div className={classes.modalTitle}>Информация о водителе</div>}
      visible={isVisible}
      onCancel={onClose}
      footer={null}
    >
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
                {driver.balance} / {driver.limit}сoм
              </strong>
            </p>
            <p>
              <span> Адрес:</span>
              <strong>{driver.adress}</strong>
            </p>
            <p>
              <span>Адрес работы:</span>
              <strong>{driver.jobAdress}</strong>
            </p>
            <p>
              <span> Дата завершения:</span>
              <strong>{driver.finish}</strong>
            </p>
          </div>
          {/* Поле для комментариев */}
          <textarea className={classes.commentBox} placeholder='Оставить комментарий...' />

          {/* Кнопки внизу модального окна */}
          <div className={classes.modalFooter}>
            <button className={classes.cancelButton} onClick={onClose}>
              Отмена
            </button>
            <button className={classes.submitButton}>Сохранить</button>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default DriverModal
