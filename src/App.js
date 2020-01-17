import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import People from "./components/People/People";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
      if(!this.props.initialized) {
        return <Preloader/>
      }

        return (
            <BrowserRouter>
                <div className="appWrapper">
                    <HeaderContainer/>
                    <Navigation/>
                    <div className={"appWrapperContent"}>
                        < Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        < Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                        < Route path='/users' render={() => <UsersContainer/>}/>
                        < Route path='/news' render={() => <News/>}/>
                        < Route path='/music' render={() => <Music/>}/>
                        < Route path='/settings' render={() => <Settings/>}/>
                        < Route path='/login' render={() => <Login/>}/>
                        < Route path='/people' render={() => <People state={this.props.state.sideBar}/>}/>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
