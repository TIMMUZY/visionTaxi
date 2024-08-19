import React from 'react'
import classes from "./Econom.module.scss"
import ecoImg from "../../assets/image/sobstv.png"

const Econom = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.welcome}>
          <p className={classes.txt}>
            Welcome to <span className={classes.greenTxt}>Vission</span>
          </p>
        </div>
      </header>

      <div className={classes.economblock}>
        <img className={classes.economimg} src={ecoImg} alt="" />

        <div className={classes.text}>
          <div className={classes.clock}>

          <h2 className={classes.h2}>Эконом-Класс</h2>
          <p className={classes.pipi}>Такси класса эконом – это в основном отечественные машины, иномарки с низким расходом топлива (малолитражки), или другие бюджетные варианты. Сервис класса эконом подходит для частых поездок по городу. Выбрав эту услугу, Вы сможете максимально сэкономить на поездках. Подробнее о классе эконом смотрите здесь.</p>
          </div>
          <table className={classes.table}>
          <tr  className={classes.tr}>
                <th>Тариф:</th>
                <th className={classes.saw}>Эконом</th>
              </tr>
              <tr  className={classes.tr}>
                <th>Стоимость:</th>
                <th className={classes.saw}>Зависит от растояние и от Регионов</th>
              </tr>
          </table>
        </div>
      </div>


    </div>
  )
}

export default Econom