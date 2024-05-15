import React from "react";
import classes from "./../Friends.module.css"


const AgesFriends = (props) => {
    return (
        <div className={classes.age}>{props.age}</div>
    )
}

export default AgesFriends;