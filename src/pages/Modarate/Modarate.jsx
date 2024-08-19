import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Modarate.module.scss'
import drivers from './Moderation.json'
import Search from '../driver-list/icons/Search'
import AdminList from '../../componets/AdminList/AdminList'

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
                  placeholder='Поиск по имени, ID, телефону, гос. номеру или модели машины'
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button className={classes.searchButton}>
                  <Search />
                </button>
              </div>
            </li>
            <div className={classes.lists}>
              <li>
                <h2 className={classes.title}>
                  <NavLink to='/moderation' className={classes.Link}>
                    Список Админов
                  </NavLink>
                  <hr />
                </h2>
              </li>
              <li>
                <h2 className={classes.title}>
                  <NavLink to='/clients' className={classes.Link}>
                    Список Клиентов
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
      <AdminList
        drivers={drivers}
        current={current}
        onChange={onChange}
        pageSize={pageSize}
        filteredDrivers={filteredDrivers}
        currentDrivers={currentDrivers}
      />
    </div>
  )
}

export default Modarate
