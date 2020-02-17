import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import './App.css';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {withSuspense} from "./Hoc/withSuspense";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <Navigation/>
                <Footer/>
                <div className="appWrapperContent">
                    <Switch>
                        < Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        < Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                        < Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                        < Route path='/users' render={withSuspense(UsersContainer)}/>
                        < Route path='/news' render={() => <News/>}/>
                        < Route path='/music' render={() => <Music/>}/>
                        < Route path='/settings' render={() => <Settings/>}/>
                        < Route path='/login' render={() => <Login/>}/>
                        < Route path='/register' render={() => <Register/>}/>
                        < Route path='*' render={() => <div>404. Page Not Found</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
