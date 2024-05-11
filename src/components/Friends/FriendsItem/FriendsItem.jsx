import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Friends.module.css";

const FriendsItem = (probs) => {
  let path = "/friends/" + probs.id
    return (
<div className={classes.friends + " " + classes.active}>
<NavLink to={path}>{probs.name}</NavLink>
</div>

    )
}




export default FriendsItem;