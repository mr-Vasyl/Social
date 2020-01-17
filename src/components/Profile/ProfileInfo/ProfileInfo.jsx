import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


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
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
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
