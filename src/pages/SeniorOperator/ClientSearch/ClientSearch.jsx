import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Pagination } from 'antd'
import drivers from './data/ClientSearch.json'
import Search from '../../../assets/icons/Search.svg'
import classes from './ClientSearch.module.scss'
import backback from '../../../assets/icons/backback.svg'
import chatIcon from '../../../assets/icons/chatIcon.svg'

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
      driver.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.list.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.finish.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.adress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.jobAdress.toLowerCase().includes(searchTerm.toLowerCase()),
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
                  <img src={Search} alt='' />
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
              <th className={`${classes.headerCell} ${classes.headerCellTopLeft}`}>Пользователь</th>
              <th className={classes.headerCell}>ID</th>
              <th className={classes.headerCell}>Список поездок</th>
              <th className={classes.headerCell}>Вего закончено</th>
              <th className={classes.headerCell}>Местополежение дома</th>
              {/* <th className={classes.headerCell}>Место работы</th> */}
              <th className={`${classes.headerCell} ${classes.headerCellTopRight}`}>Место работы</th>
            </tr>
          </thead>
          <tbody>
            {currentDrivers.map((driver) => (
              <tr key={driver.id}>
                <td className={classes.bodyCell}>
                  <div className={classes.profile}>
                    <img className={classes.profileImage} src={driver.img} alt='' />
                    <div>
                      <p className={classes.user}>{driver.user}</p>
                      <p className={classes.phone}>{driver.phone}</p>
                    </div>
                  </div>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>{driver.id}</p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>{driver.list}</p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>{driver.finish}</p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.adress}>
                    <p>{driver.adress}</p>
                  </p>
                </td>
                <td className={classes.bodyCell}>
                  <div className={classes.liveAdress}>
                    <p className={classes.adress}>{driver.jobAdress} </p>
                    <NavLink to={`/ChatMessage/${driver.id}`}>
                      <img className={classes.chatIcon} src={chatIcon} alt='chatIcon' />
                    </NavLink>
                  </div>
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
