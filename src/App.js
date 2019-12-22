import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import People from "./components/People/People";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navigation />
        <div className={"appWrapperContent"}>
          < Route path='/profile' render={() => <Profile store={props.store} />} />
          < Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
          < Route path='/users' render={() =><UsersContainer />} />
          < Route path='/news' render={() => <News />} />
          < Route path='/music' render={() => <Music />} />
          < Route path='/settings' render={() => <Settings />} />
          < Route path='/people' render={() => <People state={props.state.sideBar} />} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
