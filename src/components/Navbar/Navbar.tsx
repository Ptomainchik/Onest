import React from "react";
import classes from"./Navbar.module.css"
import { NavLink } from "react-router-dom";




const Navbar: React.FC = () => {
    return      ( <nav className={classes.nav}>
    <div className={classes.item}>
        <NavLink to="/profile" activeClassName = {classes.activeLink}>Profile</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
    </div>
    <div className={classes.item}>
        <a>News</a>
    </div>
    <div className={classes.item}>
        <a>Music</a>
    </div>
    <div className={classes.item}>
        <a>Settings</a>
    </div>
    <div className={classes.item}>
        <a>Friends</a>
    </div>
 </nav>)
}

export default Navbar;