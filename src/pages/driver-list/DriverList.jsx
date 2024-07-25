import React from 'react';
import classes from './DriverList.module.scss';

const DriverList = () => {
  return (
    <div>
      <div>
        <ul className={classes.regist}>
          <li>
            <h2 className={classes.title}>Водительский Лист</h2>
          </li>
          <li>
            <input className={classes.input} type="text" placeholder="Search by Name" />
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
              <td className={classes.bodyTime}>7 часов назад</td>
            </tr>
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>7 часов назад</td>
            </tr>
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>7 часов назад</td>
            </tr>
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>7 часов назад</td>
            </tr>
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>7 часов назад</td>
            </tr>
            <tr>
            <td className={classes.bodyCell}>134567431234</td>
              <td className={classes.bodyCell}>Иван Иванов <br/> Иванович</td>
              <td className={classes.bodyCell}>996134567431234</td>
              <td className={classes.bodyCell}>O324OD</td>
              <td className={classes.bodyCell}>BMW X5</td>
              <td className={classes.bodyTime}>7 часов назад</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverList;