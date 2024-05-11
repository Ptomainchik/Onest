import React from "react";
import classes from "./../Friends.module.css"


const AgesFriends = (probs) => {
    return (
        <div className={classes.age}>{probs.age}</div>
    )
}

export default AgesFriends;