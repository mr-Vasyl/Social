import React from 'react';
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

import { Typography } from 'antd';



const Navigation = (props) => {
    const { Text } = Typography;
    return (
        <div>
            <nav className={s.navigation}>

                <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
                <div className={s.item}><NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></div>
                <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}> Messages</NavLink></div>
                <div className={s.item}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
                <div className={s.item}><NavLink to="/register" activeClassName={s.activeLink}>Register</NavLink></div>
            </nav>
            {/*<div className={s.peopleList}>*/}
            {/*    <div className={s.friendsTitle}><NavLink to="/people" activeClassName={s.activeLink}>Friends</NavLink></div>*/}
            {/*    <div className={s.friendsList}><FriendsList store={props.store} /></div>*/}
            {/*</div>*/}

        </div>



    )
}

export default Navigation;
