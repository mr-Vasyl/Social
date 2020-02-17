import React from 'react';
import s from "./Post.module.css";
import PropTypes from 'prop-types';
import {Icon} from "antd";

const Post = (props) => {
  return (<div>

          <div className={s.item}>
              <img className={s.postImg} src={window.location.origin + '/logo.png'} />
              <span className={s.addMessage} >{props.massage}</span>
              <span> <Icon type="like" />{props.likesCount}</span>
          </div>
      </div>


  );
}

export default Post;

Post.propTypes = {
  massage: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired
}