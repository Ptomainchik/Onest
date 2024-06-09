import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) 
        {userId =2}
    
        this.props.getUserProfile(userId)
        
    }


  render() {

 

    return (
        <Profile {...this.props} profile={this.props.profile}/>
)}}

let mapStateToProps = (state) => ({
 profile: state.profilePage.profile
})


export default compose (connect(mapStateToProps, {getUserProfile}), withRouter, withAuthRedirect)(ProfileContainer)


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