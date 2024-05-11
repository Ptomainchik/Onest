import React from "react";
import classes from "./Music.module.css";
import MusicItem from "./MusicItem/MusicItem";
import Sings from "./Sings/Sings";

const Music = (probs) => {
 let musicsElements=
  probs.state.stylymus.map(stylm => <MusicItem stylesmusic={stylm.stylesmusic} id={stylm.id}/>)
 
 let qantityElements = 
  probs.state.sings.map(quantity => <Sings quantity={quantity.quantity} id={quantity.id}/>)
      
  return ( 
        <div className={classes.musics}>
         <div className={classes.musicsitem}>
            {musicsElements}
         </div>
         <div className={classes.quantity}>
            {qantityElements}
        </div>
        </div>
       )
}

export default Music;