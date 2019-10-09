import React from 'react';
import Friends from './Friends/Friends';
import s from "./FriendsList.module.css";
const FriendsList = (props) => {

  let frendsElements = props.store._state.sideBar.peopleList.
  map((p) => <Friends name={p.name}/>)

  return (
    <div className={s.friendsElements}>
      {frendsElements}
    </div>
  )
};

export default FriendsList;