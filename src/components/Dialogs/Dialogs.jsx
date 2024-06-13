import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) =>{

 let state = props.dialogsPage;

 let dialogsElements = 
  state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
   
 let messagesElements = 
  state.messages.map(message => <Message message={message.message} key={message.id}/>)

 let addNewMessage = (values) => {
   props.sendMessage(values.newMessageBody);
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
     </div>
     <AddMessageForm onSubmit={addNewMessage}/>
     </div>
    )
}

export default Dialogs;