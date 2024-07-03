import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import { Component } from "react";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import { BrowserRouter, Redirect, Switch, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { initializedApp } from "./redux/appReduser";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { withSuspense } from "./components/hoc/withSuspense";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const LoginPage = React.lazy(() => import("./components/Login/Login"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

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
        <Switch>
            <Route exact path = "/" render = {() => <Redirect to = {"/profile"}/>}/>
            <Route path = "/dialogs" render = {withSuspense(DialogsContainer)}/>
            <Route path = "/profile/:userId?" render = {withSuspense(ProfileContainer)}/>
            <Route path = "/users" render = {withSuspense(UsersContainer)}/>
            <Route path = "/login" render = {withSuspense(LoginPage)}/>
            <Route path = "*" render = {() => <div>404 NOT FOUND</div>}/>
        </Switch>
     </div>
    </div>


  );
}}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose ( withRouter, connect (mapStateToProps, {initializedApp})) (App);

const OneApp = (props) => {
  return <BrowserRouter>
  <Provider store = {store}>
   <AppContainer/>
  </Provider>
</BrowserRouter>
}

export default OneApp;
