import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const maxLenght50 = maxLengthCreator(50);

const AddMassegeForm = (props) => {
    return (
       <form onSubmit={props.handleSubmit}>
          <div>
       <Field component={Textarea} validate={[required, maxLenght50]}
       name="newMessageBody" placeholder="Enter your message"/>
       </div>
       <div><button>Send</button></div>
      </form>
    )
 }

 export default reduxForm({form: "dialog-add-message-form"}) (AddMassegeForm)