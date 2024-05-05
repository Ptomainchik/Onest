import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (probs) => {
   let path = "/dialogs/" + probs.id
   return (
<div className={classes.dialog + " " + classes.active}>
<NavLink to={path}>{probs.name}</NavLink>
</div>
)}

const Message = (probs) => {
    return (
        <div className={classes.message}>{probs.message}</div>
    )
}


const Dialogs = (probs) =>{
 let dialogs= [
    {id:"1", name:"Dmitry"},
    {id:"2", name:"Alexey"},
    {id:"3", name:"Alexander"},
    {id:"4", name:"Viktoria"},
    {id:"5", name:"Zinaida"}
   ]   
 
 let messages = [
   {id:"1", message:"Hi"},
   {id:"2", message:"Privet"},
   {id:"3", message:"Hello"},
   {id:"4", message:"Zdraste"},
   {id:"5", message:"Yo"}
   ]

 let dialogElements = dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
   
 let messageElements = messages
    .map(message => <Message message={message.message} id={message.id}/>)
   
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