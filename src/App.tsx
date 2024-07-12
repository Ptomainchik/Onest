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
import store, { AppStateType } from "./redux/redux-store";
import { withSuspense } from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const LoginPage = React.lazy(() => import("./components/Login/Login"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializedApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedLoginPage = withSuspense(LoginPage)


class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occured")
  }

  componentDidMount() {
    this.props.initializedApp()
    window.addEventListener("unhadledrejection", this.catchAllUnhandledErrors)
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
            <Route path = "/dialogs" render = {() => <SuspendedDialogs/>}/>
            <Route path = "/profile/:userId?" render = {() => <SuspendedProfile/>}/>
            <Route path = "/users" render = {() => <UsersContainer pageTitle={"Atractors"}/>}/>
            <Route path = "/login" render = {() => <SuspendedLoginPage/>}/>
            <Route path = "*" render = {() => <div>404 NOT FOUND</div>}/>
        </Switch>
     </div>
    </div>


  );
}}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType> ( withRouter, connect (mapStateToProps, {initializedApp})) (App);

const OneApp: React.FC = (props) => {
  return <BrowserRouter>
  <Provider store = {store}>
   <AppContainer/>
  </Provider>
</BrowserRouter>
}

export default OneApp;
