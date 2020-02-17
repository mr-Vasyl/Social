import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from 'antd';

import s from "./Header.module.css"

const Header = (props) => {

    return (
        <header className={s.mainHeader + " " + s.box}>
            <div className={s.headerNavigation}>
                <NavLink to={'/profile'}>
                    <img alt="logo Site" src={window.location.origin + '/logo.svg'}/>
                </NavLink>

                <div className={s.loginBlock}>
                    {props.isAuth
                        ?
                        <span><b>{props.login}</b> <Button type="primary" onClick={props.logout}>Log out</Button></span>

                        : <div className={s.enterUsers}>
                            <NavLink to={'/login'}><Button type="primary">Login</Button></NavLink>
                            <NavLink to={'/register'}><Button type="primary">Register</Button></NavLink>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;
