import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Dialogs = (props) =>{

 let state = props.dialogsPage;

 let dialogsElements = 
  state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
   
 let messagesElements = 
  state.messages.map(message => <Message message={message.message} key={message.id}/>)

 let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
   props.sendMessage();
 }

 let onNewMessageChange= (event) => {
   let body = event.target.value;
   props.updateNewMessageBody(body);
 }

if (!props.isAuth)
   return <Redirect to = {"/login"}/>;

    return ( 
    <div className={classes.dialogs}>
     <div className={classes.dialogsitems}>
        {dialogsElements}
     </div>
     <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
         <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"></textarea></div>
         <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
       
     </div>
     </div>
    )
}


export default Dialogs;