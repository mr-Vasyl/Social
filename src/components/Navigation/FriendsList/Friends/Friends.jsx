import React from 'react';
import s from "./Friends.module.css"

const Friends = (props) => {
  return (
    <div>
      <div><img className={s.friendsImg} src={window.location.origin + '/avatar.png'} /></div>
      <div>{props.name}</div>
    </div>

  )
};

export default Friends;
