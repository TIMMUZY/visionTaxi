import React from "react";
import classes from "./Parent.module.scss"

const Parent = ({children}) => {
  return <div className={classes.Parent}>{children}</div>;
};

export default Parent;
