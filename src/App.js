import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = () => {


  return (

    <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
     <div className='app-wrapper-content'>
         <Routes>
             <Route path = "/dialogs" element={<DialogsContainer/>}/>
             <Route path = "/profile/:userId?" element ={<ProfileContainer />} />
             <Route path = "/users" element={<UsersContainer/>}/>
         </Routes>
     </div>
    </div>


  );
}



export default App;
