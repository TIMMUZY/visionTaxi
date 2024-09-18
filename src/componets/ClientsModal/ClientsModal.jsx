import React, { useState } from 'react';
import { Modal } from 'antd';
import classes from "./ClientsModal.module.scss";

const ClientsModal = ({ isVisible, client, onClose }) => {
  const [activeDirection, setActiveDirection] = useState('Списание');

  const handleDirectionChange = (direction) => {
    setActiveDirection(direction);
  };

  return (
    <>
      <Modal
        title={<div className={classes.modalTitle}>Выплаты и списание</div>}
        visible={isVisible}
        onCancel={onClose}
        footer={null}
        bodyStyle={{ minHeight: '500px' }}
        style={{ top: '50px' }}
      >
        {client && (
          <div className={classes.modalContent}>
            <div className={classes.clientInfo}>
              <p>
              Имя водителя: <strong>{client.name}</strong>
              </p>
              <p>
              Имя клиента: <strong>{client.name}</strong>
              </p>
              <div className={classes.names}>

              <p>
                ID: <strong>{client.id}</strong>
              </p>
              <p>
                <span>Гос. номер: </span> <strong>{client.carNumber}</strong>
              </p>
              </div>

              <p>
                <span>Номер телефона:</span> <strong>{client.phone}</strong>
              </p>
              <p>
                <span>Машина:</span>
                <strong>{client.carModel}</strong>
              </p>
              <p>
                <span>Способ платежа:</span>
                <select className={classes.boxTitle}>
                  <option className={classes.zagolovok} value=''>
                  Наличные
                  </option>
                  <option value=''>Наличные</option>
                  <option value=''>Карта</option>
                  <option value=''>Перевод</option>
                </select>
              </p>
              <p>
                <span>Тариф:</span>
                <strong>
                  {client.class} 
                </strong>
              </p>  
              <p>
                <span>Откуда:</span>
                <strong>
                  {client.where} 
                </strong>
              </p>  
              <p>
                <span>Куда:</span>
                <strong>
                  {client.Where} 
                </strong>
              </p>  
           
             
            </div>
            <textarea className={classes.commentBox} placeholder='Оставить комментарий...' />
           
          </div>
        )}
      </Modal>
    </>
  );
};

export default ClientsModal;
