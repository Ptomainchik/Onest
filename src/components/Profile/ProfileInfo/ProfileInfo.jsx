import React from "react";
import classes from"./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
   if (!props.profile) {
    return <Preloader/>
   }
  
  return (
    <div>
    <div>
     <img className={classes.img1} alt="Mountians" src="https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg"/>
     </div>
    <div className={classes.discriptionBlock}>
      <img src={props.profile.photos.large} alt="Foto" />
      <div>{props.profile.fullName}</div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
   </div>
)}

export default ProfileInfo;
