import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { initializedApp } from "./redux/appReduser";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component  {
  componentDidMount() {
    this.props.initializedApp();
    }

render(){
  if (!this.props.initialized) {
  return <Preloader/>}

  return (
    
    <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
     <div className='app-wrapper-content'>
     
            <Route path = "/dialogs" render = { () => <DialogsContainer/>} />
            <Route path = "/profile/:userId?" render = { () => <ProfileContainer/>} />
            <Route path = "/users" render = { () => <UsersContainer/>} />
            <Route path = "/login" render = { () => <LoginPage/>}/>
          
     </div>
    </div>


  );
}}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose ( withRouter, connect (mapStateToProps, {initializedApp})) (App);


