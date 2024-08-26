import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импорт useNavigate
import classes from './Check.module.scss';
import { Pagination } from 'antd';
import drivers from './data/check.json'; 
import Search from './icons/Search';

const Check = () => {
  const [current, setCurrent] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 12;
  const navigate = useNavigate(); // Хук для навигации

  const onChange = (page) => {
    setCurrent(page);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDrivers = drivers.filter(driver =>
    driver.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.patronymic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.carNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.carModel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (current - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentDrivers = filteredDrivers.slice(startIndex, endIndex);

  const handleRowClick = (id) => {
    navigate(`/profill/${id}`);
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
                placeholder='Search by any parameter'
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className={classes.searchButton}>
                <Search />
              </button>
            </div>
          </li>
          <li>
            <h2 className={classes.title}>Водительский Лист Заявок</h2>
          </li>
          <li>
            <label className={classes.selectWrapper}>
              <select className={classes.boxTitle}>
                <option className={classes.zagolovok} value=''>
                  Все водители
                </option>
                <option value='Econom'>Эконом</option>
                <option value='Comfort'>Комфорт</option>
                <option value='Business'>Бизнес</option>
                <option value='Minivan'>Минивен</option>
                <option value='Cargo'>Грузовой</option>
                <option value='Delivery'>Доставка</option>
              </select>
            </label>
          </li>
        </ul>
      </div>
      <div className={classes.tableWrapper}>
        <table className={classes.table}>
          <thead>
            <tr className={classes.headerTr}>
              <th className={`${classes.headerCell} ${classes.headerCellTopLeft}`}>ID</th>
              <th className={classes.headerCell}>ФИО</th>
              <th className={classes.headerCell}>Номер Телефона</th>
              <th className={classes.headerCell}>Гос. Номер</th>
              <th className={classes.headerCell}>Модель Машины</th>
              <th className={`${classes.headerCell} ${classes.headerCellTopRight}`}>Последнее Время Работы</th>
            </tr>
          </thead>
          <tbody>
            {currentDrivers.map((driver) => (
              <tr key={driver.id} onClick={() => handleRowClick(driver.id)} className={classes.clickableRow}>
                <td className={classes.bodyCell}>{driver.id}</td>
                <td className={classes.bodyCell}>
                  {driver.name} <br /> {driver.patronymic}
                </td>
                <td className={classes.bodyCell}>{driver.phone}</td>
                <td className={classes.bodyCell}>{driver.carNumber}</td>
                <td className={classes.bodyCell}>{driver.carModel}</td>
                <td className={classes.bodyTime}>
                  <div className={classes.timeContent}>{driver.lastActive}</div>
                </td>
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
    </div>
  );
}

export default Check;
