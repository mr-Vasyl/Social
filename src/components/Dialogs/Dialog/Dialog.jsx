import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

import s from "./../Dialogs.module.css";

const Dialog = (props) => {

    return <div className={s.dialog + " " + s.active}>
        <NavLink to={"/dialods/" + props.id}>{props.name}</NavLink></div>
}

export default Dialog;

Dialog.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}