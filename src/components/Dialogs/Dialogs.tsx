import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { InitialStateType } from "../../redux/dialogsReducer";


type PropsType = {
   dialogsPage: InitialStateType
   sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
   newMessageBody: string
} 

const Dialogs: React.FC<PropsType> = (props) =>{

 let state = props.dialogsPage;

 let dialogsElements = 
  state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
   
 let messagesElements = 
  state.messages.map(message => <Message message={message.message} key={message.id}/>)

 let addNewMessage = (values: {newMessageBody: string}) => {
   props.sendMessage(values.newMessageBody);
}


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