import React, { useState } from 'react';
import classes from './Connection.module.scss';
import { Pagination } from 'antd';
import drivers from './Connection.json'; // Проверьте путь
import Search from './icons/Search'; // Проверьте путь

const Connection = () => {
  const [current, setCurrent] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 12;

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

  return (
    <div className={classes.headerContent}>
      <div>
        <ul className={classes.regist}>
          <li className={classes.searchWrapper}>
            <div className={classes.search}>
              <input
                type="text"
                className={classes.searchInput}
                placeholder="Поиск по имени, ID, телефону, гос. номеру или модели машины"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className={classes.searchButton}>
                <Search />
              </button>
            </div>
          </li>
          <li>
            <h2 className={classes.title}>Список Админов</h2>
          </li>
          <li>
            <h2 className={classes.title}>Список Клиентов</h2>
          </li>
          <li>
            <label className={classes.selectWrapper}>
              <select className={classes.boxTitle}>
                <option className={classes.zagolovok} value="">
                  Все водители
                </option>
                <option value="">Эконом</option>
                <option value="">Комфорт</option>
                <option value="">Бизнес</option>
                <option value="">Минивен</option>
                <option value="">Грузовой</option>
                <option value="">Доставка</option>
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
              <th className={classes.headerCell}>Причина</th>
              <th className={`${classes.headerCell} ${classes.headerCellTopRight}`}>Последнее Время Работы</th>
            </tr>
          </thead>
          <tbody>
            {currentDrivers.map(driver => (
              <tr key={driver.id} className={classes.row}>
                <td className={classes.bodyCell}>{driver.id}</td>
                <td className={classes.bodyCell}>
                  {driver.name} <br /> {driver.patronymic}
                </td>
                <td className={classes.bodyCell}>{driver.phone}</td>
                <td className={classes.bodyCell}>{driver.carNumber}</td>
                <td className={classes.bodyCell}>{driver.carModel}</td>
                <td className={classes.bodyCell}>{driver.cause}</td>
                <td className={classes.bodyCell}>{driver.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={classes.line}></div>
      </div>
      <div className={classes.paginationContainer}>
        <Pagination
          className={classes.Paginate}
          current={current}
          onChange={onChange}
          pageSize={pageSize}
          total={filteredDrivers.length}
        />
      </div>
    </div>
  );
};

export default Connection;
