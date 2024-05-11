import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music"
import { Routes, Route } from "react-router-dom";



const App = (probs) => {


  return (

    <div className='app-wrapper'>
          <Header />
          <Navbar />
     <div className='app-wrapper-content'>
         <Routes>
             <Route path="/dialogs" element={<Dialogs state={probs.state.dialogsPage}/>}/>
             <Route path="/profile" element={<Profile profilePage={probs.state.profilePage} dispatch={probs.dispatch} />}/>
             <Route path="/friends" element={<Friends state={probs.state.sidebar}/>}/>
             <Route path="/music" element={<Music state={probs.state.music}/>}/>
         </Routes>
     </div>
    </div>


  );
}



export default App;
