import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Pagination } from 'antd'
import drivers from './data/ClientSearch.json'
import Search from '../../assets/icons/Search.svg'
import classes from './ClientSearch.module.scss'
import backback from '../../assets/icons/backback.svg'

const ClientSearch = () => {
  const [current, setCurrent] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const pageSize = 12

  const onChange = (page) => {
    setCurrent(page)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.patronymic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.carNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.carModel.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const startIndex = (current - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentDrivers = filteredDrivers.slice(startIndex, endIndex)

  return (
    <div className={classes.headerContent}>
      <div className={classes.firstchallange}>
        <ul className={classes.regist}>
          <div className={classes.lists}>
            <h1 className={classes.textSearch}>Поиск клиентов</h1>
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
                  <img src={Search} alt="" />
                </button>
              </div>
            </li>
          </div>
          <li>
            <NavLink to='/connection' className={classes.Link}>
              <button className={classes.title}>
                <img src={backback} alt='' />
                <p>Назад</p>
              </button>
            </NavLink>
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
              <th className={`${classes.headerCell} ${classes.headerCellTopRight}`}>Личные сообщения</th>
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
                <td className={classes.bodyCell}>{driver.rating}</td>
                <td className={classes.bodyTime}>
                  <NavLink to={`/ChatMessage/${driver.id}`} className={classes.timeContent}>
                    Написать
                  </NavLink>
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
  )
}

export default ClientSearch
