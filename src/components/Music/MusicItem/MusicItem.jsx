import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Music.module.css";

const MusicItem = (probs) => {
  let path = "/music/" + probs.id
    return (
<div className={classes.musics + " " + classes.active}>
<NavLink to={path}>{probs.stylesmusic}</NavLink>
</div>

    )
}




export default MusicItem;