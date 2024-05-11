import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (probs) =>{

 let dialogElements = 
  probs.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
   
 let messageElements = 
  probs.state.messages.map(message => <Message message={message.message} id={message.id}/>)
   
    return ( 
    <div className={classes.dialogs}>
     <div className={classes.dialogsitems}>
        {dialogElements}
     </div>
     <div className={classes.messages}>
        {messageElements}
     </div>
     </div>
    )
}


export default Dialogs;