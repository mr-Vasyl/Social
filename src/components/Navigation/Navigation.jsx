import React from 'react';
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList";

const Navigation = (props) => {
    return (
        <div>
            <nav className={s.navigation}>
                <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
                <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}> Messages</NavLink></div>
                <div className={s.item}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
            </nav>
            <div className={s.peopleList}>
                <div className={s.friendsTitle}><NavLink to="/people" activeClassName={s.activeLink}>Friends</NavLink></div>
                <div className={s.friendsList}><FriendsList peopleList={props.state.peopleList} /></div>
            </div>

        </div>



    )
}

export default Navigation;
