import React from "react";
import classes from"./Header.module.css";
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return <header className={classes.head}>
  
    <img alt="Logo happy new year" src="https://avatars.mds.yandex.net/i?id=d6e021c9cea3d16f6d3c88a9e2a8c27fe8336f6f-12480075-images-thumbs&n=13"/>
<div className={classes.loginBlock}>
    {props.isAuth ? 
    <div>{props.login}   <button onClick={props.logout}>Logout</button></div>
    : <NavLink to={"/login"}>Login</NavLink>}
</div>

 </header>
}
    
export default Header;