import React from 'react';
import PropTypes from 'prop-types';

import s from "./../Dialogs.module.css";

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
};

export default Message;

Message.propTypes = {
    message: PropTypes.string.isRequired
}