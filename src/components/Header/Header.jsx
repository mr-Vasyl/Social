import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.mainHeader}>
            <div className={s.headerNavigation}><img src={window.location.origin + '/logomini.png'} />
            </div>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login:
                <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
