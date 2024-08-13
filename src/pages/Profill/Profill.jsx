import React from 'react'
import classes from "./Profill.module.scss"
import backround from "../../assets/image/backround.png"

const Profill = () => {
  
  return (
   <div>
    <header  className={classes.header}><img className={classes.backr} src={backround} alt="" /></header>
   </div>
  )
}

export default Profill