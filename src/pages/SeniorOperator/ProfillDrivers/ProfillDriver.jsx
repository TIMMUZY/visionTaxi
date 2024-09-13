import React from 'react'
import classes from './ProfillDriver.module.scss'
import taga from '../../../assets/image/Rectangle.png'
import icon from '../../../assets/icons/iconaura.svg'
import icon1 from '../../../assets/icons/cartbank.svg'
import icon2 from '../../../assets/icons/agree.svg'
import icon3 from '../../../assets/icons/skeep.svg'
import icon4 from '../../../assets/icons/escape.svg'
import point from '../../../assets/icons/point.svg'
import cars from '../../../assets/image/cars.png'
import { NavLink, useParams } from 'react-router-dom'

const ProfillDriver = () => {
  const { driverId } = useParams()
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2 className={classes.gojo}>Профиль Водителя</h2>
        <div className={classes.header2}>
          <h3>
            <NavLink to='/driverStatistics' className={classes.Link}>
              Статистика
            </NavLink>
          </h3>
          <h3>История водителя</h3>
        </div>
      </header>
      <div className={classes.container1}>
        <div className={classes.block}>
          <img className={classes.tari} src={taga} alt='' />
          <table className={classes.table}>
            <tr className={classes.tr}>
              <th className={classes.cours}>Имя:</th>
              <th className={classes.saw}>Алихан</th>
            </tr>
            <tr className={classes.tr}>
              <th className={classes.cours}>Дата рождения:</th>
              <th className={classes.saw}>12.12.1998</th>
            </tr>
            <tr className={classes.tr}>
              <th className={classes.cours}>Дата регистраци:</th>
              <th className={classes.saw}>15.08.2024</th>
            </tr>
            <tr className={classes.tr}>
              <th className={classes.cours}>Номер телефона:</th>
              <th className={classes.saw}>+996 558 003 404</th>
            </tr>
            <tr className={classes.tr}>
              <th className={classes.cours}>ID:</th>
              <th className={classes.saw}>1098723456876</th>
            </tr>
          </table>
        </div>
        <div className={classes.line}></div>
        <div>
          <h2 className={classes.mine}>О себе</h2>
          <input className={classes.input} type='text' placeholder='Напишите текст...' />
        </div>
      </div>
      <div className={classes.iconblock}>
        <div className={classes.iconStat}>
          <img src={icon} alt='icon' className={classes.icon} />
          <span className={classes.statText}>Оценка 5</span>
        </div>
        <div className={classes.iconState}>
          <img src={icon1} alt='icon' className={classes.icon1} />
          <span className={classes.statText}>Карта 0</span>
        </div>
        <div className={classes.iconState1}>
          <img src={icon2} alt='icon' className={classes.icon2} />
          <span className={classes.statText}>Принятые 23</span>
        </div>
        <div className={classes.iconState2}>
          <img src={icon3} alt='icon' className={classes.icon3} />
          <span className={classes.statText}>Пропуск заказа 7</span>
        </div>
        <div className={classes.iconState4}>
          <img src={icon4} alt='icon' className={classes.icon4} />
          <span className={classes.statText}>Отмена заказа 10</span>
        </div>
      </div>
      <div className={classes.container3}>
        <div className={classes.block1}>
          <div className={classes.block2}>
            <img className={classes.cars} src={cars} alt='' />
            <button className={classes.control}>Фото контроль</button>
          </div>
          <div className={classes.infoCar}>
            <table className={classes.table}>
              <tr className={classes.tr}>
                <div>
                  <th className={classes.cours}>Название машины:</th>
                  <th className={classes.saw}>BMW M5 VI (F90)</th>
                </div>
                <hr />
              </tr>
              <tr className={classes.tr}>
                <div>
                  <th className={classes.cours}>Цвет машины:</th>
                  <th className={classes.saw}>Белый</th>
                </div>
                <hr />
              </tr>
              <tr className={classes.tr}>
                <div>
                  <th className={classes.cours}>Номер машины:</th>
                  <th className={classes.saw}>D32KG</th>
                </div>
                <hr />
              </tr>
              <tr className={classes.tr}>
                <div>
                  <th className={classes.cours}>Таксо-Парк:</th>
                  <th className={classes.saw}>Не имеется </th>
                </div>
                <hr />
              </tr>
              <tr className={classes.tr}>
                <div>
                  <th className={classes.cours}>Класс машины:</th>
                  <th className={classes.saw}>Бизнес</th>
                </div>
                <hr />
              </tr>
            </table>
          </div>
          <div className={classes.lines}></div>
          <div className={classes.block3}>
            <table className={classes.table}>
              <tr className={classes.tr}>
                <div>
                  <span>
                    <th className={classes.cours}>Серия и Номер В.У:</th>
                  </span>
                  <th className={classes.saw}>35 234 324567</th>
                </div>
              </tr>
              <tr className={classes.tr}>
                <div>
                  <span>
                    <th className={classes.cours}>Дата Выдачи В.У:</th>
                  </span>
                  <th className={classes.saw}>23.05.2019</th>
                </div>
              </tr>
              <tr className={classes.tr}>
                <div>
                  <span>
                    <th className={classes.cours}>Действует До:</th>
                  </span>
                  <th className={classes.saw}>23.05.2025</th>
                </div>
              </tr>
              <tr className={classes.tr}>
                <div>
                  <span>
                    <th className={classes.cours}>Страна Выдачи В.У:</th>
                  </span>
                  <th className={classes.saw}>Нигерия </th>
                </div>
              </tr>
              <tr className={classes.tr}>
                <div>
                  <span>
                    <th className={classes.cours}>Водительский Стаж:</th>
                  </span>
                  <th className={classes.saw}>5-6 Лет</th>
                </div>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfillDriver
