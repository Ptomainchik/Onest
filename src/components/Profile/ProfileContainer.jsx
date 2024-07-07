import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  refreshProfile() {let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push("/login")
      }
    }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

  }

  componentDidMount() {
    this.refreshProfile();
    }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId ) {
      this.refreshProfile();
    }
    
  }

  render() {

 

    return (
        <Profile {...this.props} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto}/>
)}}

let mapStateToProps = (state) => ({
 profile: state.profilePage.profile,
 status: state.profilePage.status,
 authorizedUserId: state.auth.userId,
 isAuth: state.auth.isAuth
})


export default compose (connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}), withRouter)(ProfileContainer)


// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Profile from "./Profile";
// import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from "../../redux/profileReducer";

// const ProfileContainer = () => {
//   const [profile, setProfile] = useState();
//   const [status, setStatus] = useState();
//   const [authorizedUserId, setAuthorizedUserId] = useState();
//   const [isAuth, setIsAuth] = useState();
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = location.state?.userId || authorizedUserId;
//     if (!userId) {
//       navigate("/login");
//     }
//     getUserProfile(userId);
//     getStatus(userId);
//   }, [location.state, authorizedUserId, navigate, getUserProfile, getStatus]);

//   useEffect(() => {
//     if (profile && status) {
//       setIsAuth(true);
//     }
//   }, [profile, status]);

//   const refreshProfile = () => {
//     const userId = location.state?.userId || authorizedUserId;
//     getUserProfile(userId);
//     getStatus(userId);
//   };

//   return (
//     <Profile
//       isOwner={!location.state?.userId}
//       profile={profile}
//       status={status}
//       updateStatus={updateStatus}
//       savePhoto={savePhoto}
//     />
//   );
// };

// export default ProfileContainer;

// import { useParams } from 'react-router-dom';
// import React, { useState, useEffect } from "react";
// import Profile from "./Profile";
// import { connect } from "react-redux";
// import { getUserProfile } from "../../redux/profileReducer";

// const ProfileContainer = (props) => {
//     let { userId } = useParams();
//     const [profile, setProfile] = useState();

//     useEffect(() => {
//         if (!userId) {
//             userId = 2;
//         }

//         props.getUserProfile(userId).then(response => {
//             setProfile(response);
//         });
//     }, [userId]);

//     return (
//         <Profile profile={profile} />
//     );
// };

// const mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// });

// export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);