import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Modarate.module.scss'
import drivers from './Moderation.json'
import Search from '../../../assets/icons/Search.svg'
import { Pagination } from 'antd'

const Modarate = () => {
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
      <header>
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
            <div className={classes.lists}>
              <li>
                <h2 className={classes.title}>
                  <NavLink to='/moderation' className={classes.Link}>
                    Бан лист
                  </NavLink>
                  <hr />
                </h2>
              </li>
              <li>
                <h2 className={classes.title}>
                  <NavLink to='/client' className={classes.Links}>
                    Статистика
                  </NavLink>
                </h2>
              </li>
            </div>
            <li>
              <label className={classes.selectWrapper}>
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
              </label>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr className={classes.headerTr}>
                <th className={`${classes.headerCell} ${classes.headerCellTopLeft}`}></th>
                <th className={classes.headerCell}>ФИО</th>
                <th className={classes.headerCell}>ID</th>
                <th className={classes.headerCell}>Номер Телефона</th>
                <th className={classes.headerCell}>Гос. Номер</th>
                <th className={classes.headerCell}>Модель Машины</th>
                <th className={classes.headerCell}>Причина</th>
                <th className={`${classes.headerCell} ${classes.headerCellTopRight}`}>Забанить</th>
              </tr>
            </thead>
            <tbody>
              {currentDrivers.map((driver) => (
                <tr className={classes.content} key={driver.id}>
                  <td className={classes.bodyCell}>
                    <img src={driver.img} alt='' />
                  </td>
                  <td className={classes.bodyCell}>{driver.name}</td>
                  <td className={classes.bodyCell}>{driver.id}</td>
                  <td className={classes.bodyCell}>{driver.phone}</td>
                  <td className={classes.bodyCell}>{driver.carNumber}</td>
                  <td className={classes.bodyCell}>{driver.carModel}</td>
                  <td className={classes.bodyCell}>{driver.cause}</td>
                  <td className={classes.bodyTime}>
                    <div className={classes.timeContent}>Подвердить</div>
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
      </main>
    </div>
  )
}

export default Modarate
