import React from "react";
import classes from "./../Music.module.css"


const Sings = (props) => {
    return (
        <div className={classes.quantitys}>{props.quantity}</div>
    )
}

export default Sings;