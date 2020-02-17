import React from 'react';
import s from "./Footer.module.css"
import {Icon} from 'antd';
import {NavLink} from "react-router-dom";


const Footer = (props) => {


    return (
        <footer className={s.minFooter}>
            <div className={s.dsds}>

                <div className={s.abait}>
                    <b>
                    <NavLink to=""> About </NavLink>
                    <NavLink to=""> Help </NavLink>
                    <NavLink to=""> Support </NavLink>
                    <NavLink to=""> Contacts </NavLink>
                    </b>
                </div>
            </div>

            <div className={s.ddd}>
                <NavLink to={'/profile'}>
                    <img src={window.location.origin + '/logo.svg'}/>
                </NavLink>
                <div className={s.users}><b>users:</b> 1,578</div>


            </div>
            <div className={s.rrr}>© 2020 Social Network
            </div>


        </footer>
    )
}

export default Footer;
