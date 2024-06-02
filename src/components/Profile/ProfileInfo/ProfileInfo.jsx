import React from "react";
import classes from"./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
   if (!props.profile) {
    return <Preloader/>
   }
  
  return (
    <div>
    <div>
     <img className={classes.img1} alt="Mountians" src="https://sportishka.com/uploads/posts/2023-12/1701737070_sportishka-com-p-gori-amanos-vkontakte-6.jpg"/>
     </div>
     <div>
     <img  alt="User" src={props.profile.photos.large}/>
      <div>{props.profile.fullName}</div>
     </div>
   </div>
)}

export default ProfileInfo;
