import classes from './StoryClients.module.scss'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Pagination } from 'antd'
import drivers from './data/storyclients.json'
// import DriverRating from "./raiting/DriverRating"
import StarRating from './Star/Star'

const StoryClients = () => {
  const [current, setCurrent] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const pageSize = 12
  const navigate = useNavigate()

  const onChange = (page) => {
    setCurrent(page)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.where.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.paymant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.dataCreate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.raiting.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.comment.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const startIndex = (current - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentDrivers = filteredDrivers.slice(startIndex, endIndex)

  const handleRowClick = (id) => {
    navigate(`/profilldriver/${id}`)
  }

  return (
    <div className={classes.headerContent}>
      <header className={classes.header}>
        <h2 className={classes.gojo}>Профиль Водителя</h2>
        <div className={classes.header2}>
          <h3>
            <NavLink to='/driverStatistics' className={classes.Link}>
              Статистика
            </NavLink>
          </h3>
          <h3>
            <NavLink to='/profilldriver/${id}' className={classes.Link}>
              Профиль водителя
            </NavLink>
          </h3>
        </div>
      </header>
      <div className={classes.tableWrapper}>
        <table className={classes.table}>
          <thead>
            <tr className={classes.headerTr}>
              <th className={`${classes.headerCell} ${classes.headerCellTopLeft}`}>Ф.И.О</th>
              <th className={classes.headerCell}>ID</th>
              <th className={classes.headerCell}>Куда едет</th>
              <th className={classes.headerCell}>Стоимость</th>
              <th className={classes.headerCell}>Класс</th>
              <th className={classes.headerCell}>Оплата</th>
              <th className={classes.headerCell}>Дата создания</th>
              <th className={classes.headerCell}>Рейтинг</th>
              <th className={`${classes.headerCell} ${classes.headerCellTopRight}`}>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            {currentDrivers.map((driver) => (
              <tr key={driver.id}>
                <td className={classes.bodyCell}>
                  <div className={classes.profile}>
                    <img className={classes.profileImage} src={driver.img} alt='' />
                    <div>
                      <p className={classes.user}>{driver.name}</p>
                    </div>
                  </div>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>{driver.id}</p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>
                    <span>{driver.where}</span>
                  </p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>{driver.price}</p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.num}>{driver.class}</p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.adress}>{driver.paymant}</p>
                </td>
                <td className={classes.bodyCell}>
                  <p className={classes.adress}>{driver.dataCreate}</p>
                </td>
                <td className={classes.bodyCell}>
                  <StarRating />
                </td>
                <td className={classes.bodyCell}>
                  <div className={classes.driverSet}>
                    <div onClick={() => handleRowClick(driver.id)} className={classes.ban}>
                      <p>Посмотреть</p>
                    </div>
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
            <h3>Всего пользователей: {drivers.length}</h3>
          </div>
          <div className={classes.online}>
            <h3>Активных пользователей: 9</h3>
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

export default StoryClients
