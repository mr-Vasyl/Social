import React from 'react';
import s from "./ProfileInfo.module.css"


const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.background}></div>

      <div className={s.descriptionBlock}>
        <div className={s.avatar}>
          <img src={window.location.origin + '/avatar.png'} />
        </div>
        <div className={s.description}>
          <p>Vasylss H.</p>
          <p>pavatar: diskription</p>
          <p>pavatar: diskription</p>
          <p>pavatar: diskription</p>
          <p>pavatar: diskription</p>
        </div>
      </div>

    </div>
  )
}

export default ProfileInfo;
