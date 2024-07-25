import React from 'react';
import classes from './DriverList.module.scss';

const DriverList = () => {
  return (
    <div>
      <div>
        <ul className={classes.regist}>
          
          <li className={classes.searchWrapper}>
            <div className={classes.search}>
              <input type="text" className={classes.searchInput} placeholder="Search by Name" />
              <button className={classes.searchButton}>
                <svg className={classes.searchIcon} aria-hidden="true" viewBox="0 0 24 24">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </li> 
          <li>
            <h2 className={classes.title}>Бан лист</h2>
          </li>
          <li>
            <h2 className={classes.title}>Отчеты </h2>
          </li>
          <li>
            <label>
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
          <thead className={classes.headerTr}>
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
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverList;