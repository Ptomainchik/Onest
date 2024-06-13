import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../assets/images/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
  
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

 return <div>
    <div>
        {pages.map(p => {
           return <span  className={props.currentPage === p && classes.selectedPage}
            onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
        })}
        
    </div>
{props.users.map(u => <div key= {u.id}>
    <span>
        <div>
            <NavLink to={"/profile/" + u.id}>
            <img src={u.photos.small != null ? u.photos.small: userPhoto} className={classes.photo} alt="Slon"/>
            </NavLink>
        </div>
        <div>
            { u.followed 
            ? <button className={classes.unfollow} disabled={props.followingInProgress.some(id => id === u.id)} onClick = { () => {
                props.unfollow(u.id)
            }}>Unfollow</button> 
            : <button  className={classes.follow} disabled={props.followingInProgress.some(id => id === u.id)} onClick = { () => {
              props.follow(u.id)
              }}>Follow</button>}
        </div>
    </span>
    <span>
      <span>
       <div className={classes.nameUser}>{u.name}</div>
       <div>{u.status}</div>
      </span>
    </span>
</div>)}
</div>
}


export default Users;