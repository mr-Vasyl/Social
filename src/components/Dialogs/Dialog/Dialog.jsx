import React from 'react';
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Dialog = (props) => {


  return <div className={s.dialogs + " " + s.active}>
    <NavLink to={"/dialods/" + props.id}>{props.name}</NavLink></div>
}

export default Dialog;

Dialog.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }