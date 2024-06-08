import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = () => {


  return (
    <BrowserRouter>
    <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
     <div className='app-wrapper-content'>
     <Switch>
            <Route exact path="/dialogs" component={DialogsContainer} />
            <Route exact path="/profile/:userId?" component={ProfileContainer} />
            <Route exact path="/users" component={UsersContainer} />
          </Switch>
          
     </div>
    </div>

</BrowserRouter>
  );
}



export default App;


