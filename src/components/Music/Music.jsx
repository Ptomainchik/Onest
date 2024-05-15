import React from "react";
import classes from "./Music.module.css";
import MusicItem from "./MusicItem/MusicItem";
import Sings from "./Sings/Sings";

const Music = (props) => {
 let musicsElements=
  props.state.stylesMusics.map(stylm => <MusicItem stylesmusic={stylm.stylemusic} id={stylm.id}/>)
 
 let qantityElements = 
  props.state.sings.map(quant => <Sings quantity={quant.quantity} id={quant.id}/>)
      
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