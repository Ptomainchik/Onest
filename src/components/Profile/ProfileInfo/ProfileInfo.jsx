import React from "react";
import classes from"./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/images/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
   if (!profile) {
    return <Preloader/>
   }
  
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length){
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
    <div>
     <img className={classes.img1} alt="Mountians" src="https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg"/>
     </div>
    <div className={classes.discriptionBlock}>
      <img src={profile.photos.large || userPhoto }  alt="Foto" />
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
      <div>{profile.fullName}</div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
   </div>
)}

export default ProfileInfo;
