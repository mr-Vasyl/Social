import React from 'react';
import {NavLink} from "react-router-dom";

import s from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={s.wrapper}>
            <div className={s.wrapperAbout}>
                <div className={s.sideBar}>
                    <b>
                        <NavLink to=""> About </NavLink>
                        <NavLink to=""> Help </NavLink>
                        <NavLink to=""> Support </NavLink>
                        <NavLink to=""> Contacts </NavLink>
                    </b>
                </div>
            </div>

            <div className={s.logoSiteFooter}>
                <NavLink to={'/profile'}>
                    <img alt="logoSiteFooter" src={window.location.origin + '/logo.svg'}/>
                </NavLink>
                <div><b>users:</b> 1,578</div>
            </div>
            <div className={s.copyright}>© 2020 Social Network
            </div>
        </footer>
    )
}

export default Footer;
