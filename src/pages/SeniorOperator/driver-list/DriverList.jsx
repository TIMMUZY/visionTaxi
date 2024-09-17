import React, { useState } from 'react';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import drivers from './driver.json';
import Search from '../../../assets/icons/Search.svg';
import classes from './DriverList.module.scss';
import driverSet from '../../../assets/icons/driverSet.svg';
import { DriverModal } from "../../../componets";

const DriverList = () => {
  const [current, setCurrent] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const pageSize = 12;
  const navigate = useNavigate();

  const onChange = (page) => {
    setCurrent(page);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.list.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.finish.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.adress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.jobAdress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (current - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentDrivers = filteredDrivers.slice(startIndex, endIndex);

  const handleRowClick = (id) => {
    navigate(`/profilldriver/:driverId`);
  };

  const handleSettingClick = (driver) => {
    setSelectedDriver(driver); // Устанавливаем выбранного водителя
    setIsModalVisible(true); // Открываем модальное окно
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Закрываем модальное окно
  };

  return (
    <div className={classes.headerContent}>
      <div className={classes.firstchallange}>
        <ul className={classes.regist}>
          <li className={classes.searchWrapper}>
            <div className={classes.search}>
              <input
                type='text'
                className={classes.searchInput}
                placeholder='Поиск'
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className={classes.searchButton}>
                <img src={Search} alt='' />
              </button>
            </div>
          </li>
          <li>
            <select className={classes.boxTitle}>
              <option className={classes.zagolovok} value=''>
                Все водители
              </option>
              <option value=''>Эконом</option>
              <option value=''>Комфорт</option>
              <option value=''>Бизнес</option>
              <option value=''>Минивен</option>
              <option value=''>Грузовой</option>
              <option value=''>Доставка</option>
            </select>
          </li>
        </ul>
      </div>
      <div className={classes.tableWrapper}>
        <table className={classes.table}>
          <thead>
            <tr className={classes.headerTr}>
              <th className={`${classes.headerCell} ${classes.headerCellTopLeft}`}>Ф.И.О</th>
              <th className={classes.headerCell}>ID</th>
              <th className={classes.headerCell}>Баланс и лимит</th>
              <th className={classes.headerCell}>Номер Телефона </th>
              <th className={classes.headerCell}>Гос: Номер</th>
              <th className={classes.headerCell}>Модель машины</th>
              <th className={`${classes.headerCell} ${classes.headerCellTopRight}`}>Профиль</th>
            </tr>
          </thead>
          <tbody>
            {currentDrivers.map((driver) => (
              <tr key={driver.id}>
                <td className={classes.bodyCell}>
                  <div className={classes.profile}>
                    <img className={classes.profileImage} src={driver.img} alt='' />
                    <div>
                      <p className={classes.user}>{driver.name}</p>
                    </div>
                  </div>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>{driver.id}</p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>
                    <span className={classes.greenTxt}>{driver.balance}</span> / {driver.balance} c
                  </p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>{driver.phone}</p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>{driver.carNumber}</p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.adress}>
                    <p>{driver.carModel}</p>
                  </p>
                </td>
                <td className={classes.bodyCell}>
                  <div className={classes.driverSet}>
                    <div key={driver.id} onClick={() => handleRowClick(driver.id)} className={classes.ban}>
                      <p>Перейти</p>
                    </div>
                    <img
                      className={classes.Setting}
                      src={driverSet}
                      alt=''
                      onClick={() => handleSettingClick(driver)} // Открываем модальное окно при клике
                    />
                  </div>
                </td>
                <td className={classes.bodyCell}></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={classes.line}></div>
      </div>
      <div>
        <div className={classes.users}>
          <div className={classes.online}>
            <h3>Всего: users: {drivers.length}</h3>
          </div>
          <div className={classes.online}>
            <h3>Активных: drivers: 9</h3>
          </div>
          <Pagination
            className={classes.Paginate}
            current={current}
            onChange={onChange}
            pageSize={pageSize}
            total={filteredDrivers.length}
          />
        </div>
      </div>

      {/* Компонент модального окна */}
      <DriverModal
        isVisible={isModalVisible}
        driver={selectedDriver}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default DriverList;
