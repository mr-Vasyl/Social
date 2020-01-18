import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {


    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src={profile.photos.large}/>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
