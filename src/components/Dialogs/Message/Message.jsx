import React from "react";
import classes from "./../Dialogs.module.css"



const Message = (probs) => {
    
   let newMessageElement = React.createRef();

   let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
   }

    return (
        <div className={classes.message}>
        <textarea ref={newMessageElement}></textarea><button onClick={addMessage}></button>{probs.message}</div>
    )
}




export default Message;