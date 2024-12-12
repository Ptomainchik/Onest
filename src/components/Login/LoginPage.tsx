import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { GetStringKeys, Input,  createField } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

import { useSelector , useDispatch} from "react-redux";
import { login } from "../../redux/authReducer";
import classes from "../common/FormsControls/FormsControls.module.css"
import { AppStateType } from "../../redux/redux-store";
import { Redirect } from "react-router-dom";

type LoginFormOwnPropsType = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
      {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
      {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

      {captchaUrl && <img alt="captcha" src={captchaUrl}/>}     
      {captchaUrl &&  createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, [])}

      { error && <div className={classes.formSummuryError}>
       {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({ form: "/login"}) (LoginForm)

export type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: React.FC = () => {
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth) 
  const dispatch = useDispatch() 
  const onSubmit = (formData: any) =>{
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
  }

  if (isAuth) {
    return <Redirect to={"/profile"}/>
  }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>   
}


