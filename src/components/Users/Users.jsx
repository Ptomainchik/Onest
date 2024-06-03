import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../assets/images/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
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
            ? <button onClick={() => {axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {"API-KEY": "e550a630-6adb-4483-b731-d04a33277ffe"}})
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unfollow(u.id)}})}}>Unfollow</button> 
            : <button onClick={ () => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {"API-KEY": "e550a630-6adb-4483-b731-d04a33277ffe"}})
                .then(response => {
                    if (response.data.resultCode === 0) {
                        props.follow(u.id)}})}}>Follow</button>}
        </div>
    </span>
    <span>
      <span>
       <div>{u.name}</div>
       <div>{u.status}</div>
      </span>
    </span>
</div>)}
</div>
}


export default Users;