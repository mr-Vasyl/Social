import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileInfoStatus";


const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.background}></div>

            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatus status={"hello"}/>
                </div>
                <div className={s.description}>
                    <p>Vasyl H.</p>
                    <p>avatar: discrption</p>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;
