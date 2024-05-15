import React from "react";
import classes from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";
import AgesFriends from "./AgesFriends/AgesFriends";

const Friends = (props) => {
 let freindsElements=
  props.state.friendsNames.map(friend => <FriendsItem name={friend.name} id={friend.id}/>)
 
 let agesElements = 
  props.state.friendsAges.map(age => <AgesFriends age={age.age} id={age.id}/>)
      
  return ( 
        <div className={classes.friends}>
         <div className={classes.friendsitem}>
            {freindsElements}
         </div>
         <div className={classes.ages}>
            {agesElements}
        </div>
        </div>
       )
}



export default Friends;