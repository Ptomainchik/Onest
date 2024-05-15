import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music"
import { Routes, Route } from "react-router-dom";



const App = (props) => {


  return (

    <div className='app-wrapper'>
          <Header />
          <Navbar />
     <div className='app-wrapper-content'>
         <Routes>
             <Route path="/dialogs" element={<Dialogs store={props.store}/>}/>
             <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
             <Route path="/friends" element={<Friends state={props.state.friendsPage}/>}/>
             <Route path="/music" element={<Music state={props.state.musicPage}/>}/>
         </Routes>
     </div>
    </div>


  );
}



export default App;
