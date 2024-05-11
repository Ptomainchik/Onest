import React from "react";
import classes from"./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (probs) => {

    return (
    <div className={classes.Pro}>
     <ProfileInfo/>
     <MyPosts posts={probs.profilePage.posts} newPostText={probs.profilePage.newPostText} dispatch={probs.dispatch}/>
   </div>
)}

export default Profile;