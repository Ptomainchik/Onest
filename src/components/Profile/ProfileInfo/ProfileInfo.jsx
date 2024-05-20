import React from "react";
import classes from"./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
    <div>
    <div>
     <img className={classes.img1} alt="Mountians" src="https://sportishka.com/uploads/posts/2023-12/1701737070_sportishka-com-p-gori-amanos-vkontakte-6.jpg"/>
     </div>
     <div>
     <img className={classes.img2} alt="Tuzemec" src="https://avatars.mds.yandex.net/i?id=5f19c09afdb05ee0848702f624818b419c4c897a-12539768-images-thumbs&n=13"/>
     </div>
   </div>
)}

export default ProfileInfo;
