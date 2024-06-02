// import React from "react";
// import Profile from "./Profile";
// import axios from "axios";
// import { connect } from "react-redux";
// import { setUserProfile } from "../../redux/profileReducer";
// import {withRouter} from "react-router-dom";

// class ProfileContainer extends React.Component {

//   componentDidMount() {
//     let userId = this.props.match.params.userId;
//     if (!userId) {userId =2}
//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
//     .then(response => {
//         this.props.setUserProfile(response.data)
        
//     })
// }

//   render() {
//     return (
//         <Profile {...this.props} profile={this.props.profile}/>
// )}};

// let mapStateToProps = (state) => ({
//  profile: state.profilePage.profile
// })

// let WithUrlDataContainerCompomponent = withRouter(ProfileContainer)

// export default connect(mapStateToProps, {setUserProfile})  (WithUrlDataContainerCompomponent);




import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";

const ProfileContainer = (props) => {
  let { userId } = useParams();
  let [profile, setProfile] = useState();

  useEffect(() => {
    if (!userId) {
      userId = 2;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        setProfile(response.data);
        props.setUserProfile(response.data);
      });
  }, [userId]);

  return (
    <Profile profile={profile} />
  );
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);