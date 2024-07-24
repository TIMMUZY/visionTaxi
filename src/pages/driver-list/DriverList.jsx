import React from 'react'
import classes from "./DriverList.module.scss"



const DriverList = () => {
  return (
     <div >
            <div>
                <ul  className={classes.regist}>
                    <li>
                        <h2 className={classes.title}>Водительский Лист</h2>
                    </li>
                    <li>
                        <input className={classes.input} type="text" placeholder='Search by Name'/>
                    </li>
                    <li>
                    <label  >
                        <select className={classes.boxTitle}>
                            <option className={classes.zagolovok} value="">Все водители</option>
                            <option  value="">Эконом</option>
                            <option  value="">Комфорт</option>
                            <option  value="">Бизнес</option>
                            <option  value="">Минивен</option>
                            <option  value="">Грузовой</option>
                            <option  value="">Доставка</option>
                        </select>
                    </label>
                    </li>
                </ul>
            </div>

            
     </div>
  )
}

export default DriverList