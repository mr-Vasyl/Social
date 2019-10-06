import React from 'react';
import s from "./Post.module.css";
import PropTypes from 'prop-types';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.postImg} src={window.location.origin + '/avatar.png'} />
      <span>{props.massage}</span>
      <span> ♥{props.likesCount}</span>
    </div>
  );
}

export default Post;

Post.propTypes = {
  massage: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired
}