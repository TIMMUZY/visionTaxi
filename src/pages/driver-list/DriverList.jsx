import React, { useState } from 'react';
import classes from './DriverList.module.scss';
import { Pagination } from 'antd';
import Search from "./icons/Search";
// import Driver from './driver.json'

const DriverList = () => {
  const [current, setCurrent] = useState(3);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div>
      <div>
        <ul className={classes.regist}>
          <li className={classes.searchWrapper}>
            <div className={classes.search}>
              <input type="text" className={classes.searchInput} placeholder="Search by Name" />
              <button className={classes.searchButton}>
                <Search />
              </button>
            </div>
          </li>
          <li>
            <h2 className={classes.title}>Бан лист</h2>
          </li>
          <li>
            <h2 className={classes.title}>Отчеты</h2>
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
              <th className={`${classes.headerCell} ${classes.headerCellTopRight}`}>Последнее Время Работы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>
                Иван Иванов <br /> Иванович
              </td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
            <tr>
              <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>
                Иван Иванов <br /> Иванович
              </td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
            <tr>
              <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>
                Иван Иванов <br /> Иванович
              </td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
            <tr>
              <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>
                Иван Иванов <br /> Иванович
              </td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
            <tr>
              <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>
                Иван Иванов <br /> Иванович
              </td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
            <tr>
              <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>
                Иван Иванов <br /> Иванович
              </td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>
                <div className={classes.timeContent}>7 часов назад</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={classes.line}>

        </div>
      </div>
      <Pagination className={classes.Paginate} current={current} onChange={onChange} total={20} />
    </div>
  );
};

export default DriverList;
