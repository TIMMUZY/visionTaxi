import React from "react";
import classes from "./Information.module.scss"

const Information = () => {
  return <div className={classes.Information}>
    <div className={classes.welcome}>
      <p>Wellcome to <span>Vission</span></p>
    </div>
  </div>;
};

export default Information;
