import React from 'react';
import {NavLink} from "react-router-dom";

import s from "./Navigation.module.css";

const Navigation = () => {

    return (
        <div>
            <nav className={s.navigation}>
                <div className={s.item}><NavLink to="/profile">Profile</NavLink></div>
                <div className={s.item}><NavLink to="/users">Users</NavLink></div>
                <div className={s.item}><NavLink to="/dialogs"> Messages</NavLink></div>
                <div className={s.item}><NavLink to="/news">News</NavLink></div>
                <div className={s.item}><NavLink to="/music">Music</NavLink></div>
                <div className={s.item}><NavLink to="/settings">Settings</NavLink></div>
                <div className={s.item}><NavLink to="/register">Register</NavLink></div>
            </nav>
        </div>
    )
};

export default Navigation;
