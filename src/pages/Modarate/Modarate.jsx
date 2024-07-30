import React, { useState } from 'react';
import classes from "./Modarate.module.scss"
import { Pagination } from 'antd';
import drivers from "./Moderation.json"

const Moderate = () => {
    const [current, setCurrent] = useState(1);
    const pageSize = 12;

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentDrivers = drivers.slice(startIndex, endIndex);
    return (
        <div className={classes.headerContent}>
            <div>
                <ul className={classes.regist}>
                    <li className={classes.searchWrapper}>
                        <div className={classes.search}>
                            <input type="text" className={classes.searchInput} placeholder="Поиск по имени или ID" />
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
                        {currentDrivers.map((driver) => (
                            <tr key={driver.id}>
                                <td className={classes.bodyCell}>{driver.id}</td>
                                <td className={classes.bodyCell}>
                                    {driver.name} <br /> {driver.patronymic}
                                </td>
                                <td className={classes.bodyCell}>{driver.phone}</td>
                                <td className={classes.bodyCell}>{driver.carNumber}</td>
                                <td className={classes.bodyCell}>{driver.carModel}</td>
                                <td className={classes.bodyCell}>{driver.cause}</td>
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
                        <h3>Всего:users:99</h3>
                    </div>
                    <div className={classes.online}>
                        <h3>Активных:drivers:9</h3>
                    </div>
                    <Pagination
                        className={classes.Paginate}
                        current={current}
                        onChange={onChange}
                        pageSize={pageSize}
                        total={drivers.length}
                    />
                </div>
            </div>
        </div>  
    )
}

export default Moderate