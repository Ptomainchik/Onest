import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";

const Dialogs = (props) =>{

 let state = props.store.getState().dialogsPage;

 let dialogElements = 
  state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
   
 let messageElements = 
  state.messages.map(message => <Message message={message.message} id={message.id}/>)

 let newMessageBody = 
  state.newMessageBody;

  let onSendMessageClick = () => {
   props.store.dispatch(sendMessageCreator());
 }

 let onNewMessageChange= (event) => {
   let body = event.target.value;
   props.store.dispatch(updateNewMessageBodyCreator(body));
 }

    return ( 
    <div className={classes.dialogs}>
     <div className={classes.dialogsitems}>
        {dialogElements}
     </div>
     <div className={classes.messages}>
        <div>{messageElements}</div>
        <div>
         <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"></textarea></div>
         <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
       
     </div>
     </div>
    )
}


export default Dialogs;