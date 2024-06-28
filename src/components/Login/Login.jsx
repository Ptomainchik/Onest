import React from "react";
import { reduxForm } from "redux-form";
import { Input, createFields } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReduser";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import classes from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
    <form onSubmit={handleSubmit}>
      {createFields("Email", "email", [required], Input)}
      {createFields("Password", "password", [required], Input, {type: "password"})}
      {createFields(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
     
     { error && <div className={classes.formSummuryError}>
       {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({ form: "/login"}) (LoginForm)

const Login = (props) => {
  const onSubmit = (formData) =>{
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>   
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (Login);