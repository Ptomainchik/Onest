import React from "react";
import classes from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (probs) => {
   let path = "/dialogs/" + probs.id
   return (
<div className={classes.dialog + " " + classes.active}>
<NavLink to={path}>{probs.name}</NavLink>
</div>
)}



export default DialogItem;