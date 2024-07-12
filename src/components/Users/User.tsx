import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../assets/images/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";
import {NavLink} from "react-router-dom";
import { UserType } from "../../types/types";

type PropsType = { 
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
 }


let User: React.FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
    <span>
<div>
                <NavLink to={"/profile/" + user.id}>
                     <img src={user.photos.small != null ? user.photos.small: userPhoto} className={classes.photo} alt="Slon"/>
                </NavLink>
</div>
        <div>
            { user.followed 
            ? <button className={classes.unfollow} disabled={followingInProgress.some(id => id === user.id)} onClick = { () => {
                unfollow(user.id)
            }}>Unfollow</button> 
            : <button  className={classes.follow} disabled={followingInProgress.some(id => id === user.id)} onClick = { () => {
              follow(user.id)
              }}>Follow</button>}
        </div>
    </span>
    <span>
    <span>
        <div className={classes.nameUser}>{user.name}</div>
        <div>{user.status}</div>
    </span>
    </span>
</div>
}



export default User;