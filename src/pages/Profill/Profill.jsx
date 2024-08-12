import React from 'react'
import classes from "./Profill.module.scss"

const Profill = () => {
  return (
    <div>
        {/* <div>
            <div>
            <img src="" alt="" />
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            </div>
            <h3></h3>
            <div className={classes.line}></div>
        </div>
         */}

         <div>
            <h3>детали</h3>
            <div>
                <h3>Имя</h3> <span><input type="text" /></span>
                <h3>Имя</h3> <span><input type="text" /></span>
                <h3>Имя</h3> <span><input type="text" /></span>
                <h3>Имя</h3> <span><input type="text" /></span>
                <h3>Имя</h3> <span><input type="text" /></span>
            </div>
         </div>

    </div>
  )
}

export default Profill