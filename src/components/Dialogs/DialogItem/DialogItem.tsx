import React from "react";
import classes from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";

type PropsType = {
   name: string
   id: number
}

const DialogItem: React.FC<PropsType> = (props) => {
   let path = "/dialogs/" + props.id
   return (
<div className={classes.dialog + " " + classes.active}>
<NavLink to={path}>{props.name}</NavLink>
</div>
)}



export default DialogItem;