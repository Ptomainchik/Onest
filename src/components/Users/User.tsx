import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../assets/images/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";
import {NavLink} from "react-router-dom";
import { UserType } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/usersSelectors";
import { followingInProgressSelector } from "../../redux/usersSelectors";
import { follow, unfollow } from "../../redux/usersReduser";

type PropsType = { 
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
 }

let User: React.FC<PropsType> = ({user}) => {
    const isAuth = useSelector(isAuthSelector);
    const followingInProgress = useSelector(followingInProgressSelector);
    const dispatch = useDispatch()
    return <div>
    <span>
<div>
                <NavLink to={"/profile/" + user.id}>
                     <img src={user.photos.small != null ? user.photos.small: userPhoto} className={classes.photo} alt="Slon"/>
                </NavLink>
</div>
        <div>
        {user.followed === true ? (
            <button className={classes.unfollow}
              disabled={
                !isAuth || followingInProgress.some((id) => id === user.id)
              }
              onClick={() => {
                dispatch(unfollow(user.id) as any);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button className={classes.follow} 
              disabled={
                !isAuth || followingInProgress.some((id) => id === user.id)
              }
              onClick={() => {
                dispatch(follow(user.id) as any);
              }}
            >
              Follow
            </button>
          )}
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