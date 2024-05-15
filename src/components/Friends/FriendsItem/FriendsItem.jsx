import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Friends.module.css";

const FriendsItem = (props) => {
  let path = "/friends/" + props.id
    return (
<div className={classes.friends + " " + classes.active}>
<NavLink to={path}>{props.name}</NavLink>
</div>

    )
}




export default FriendsItem;