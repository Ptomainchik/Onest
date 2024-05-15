import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Music.module.css";

const MusicItem = (props) => {
  let path = "/music/" + props.id
    return (
<div className={classes.musics + " " + classes.active}>
<NavLink to={path}>{props.stylesmusic}</NavLink>
</div>

    )
}




export default MusicItem;