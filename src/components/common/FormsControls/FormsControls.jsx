import React from "react"
import classes from "./FormsControls.module.css"
import { Field } from "redux-form";

export const FormControl = ({input, meta: {touched, error},children }) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
          <div>
            {children}
          </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>     
}

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}

export const createFields = (placeholder, name, validators, component, props = [], text = "") => (
   <div> 
    <Field placeholder = {placeholder} name = {name} validate = {validators} component = {component} {...props}/> {text}
   </div>
)

