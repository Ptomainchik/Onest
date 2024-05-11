import React from "react";
import classes from "./../Music.module.css"


const Sings = (probs) => {
    return (
        <div className={classes.quantitys}>{probs.quantity}</div>
    )
}

export default Sings;