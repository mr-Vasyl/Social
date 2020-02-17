import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from "antd";

import s from "./Post.module.css";

const Post = (props) => {
    return (<div>
            <div className={s.item}>
                <img className={s.postImg} alt="logoAvatar" src={window.location.origin + '/logo.png'}/>
                <span className={s.addMessage}>{props.massage}</span>
                <span> <Icon type="like"/>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;

Post.propTypes = {
    massage: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired
}