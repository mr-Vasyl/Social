import React, {useState} from 'react';
import {Button} from 'antd';

import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../img/user.svg";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div className={s.descriptionBlock}>
            <div className={s.avatar}>
                <img alt="userPhoto" src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner &&
                <div><input className={s.inputType} multiple type={"file"} onChange={onMainPhotoSelected}/></div>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true);
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <Button type="primary" onClick={goToEditMode}>Edit</Button>
            </div>}
            <div>
                <b>FullName:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My skills:</b> {profile.lookingForAJobDescription}
            </div>
            }
            <div><b>About me:</b> {profile.aboutMe} </div>
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}><b>{contactTitle}</b>:{contactValue}</div>
}
export default ProfileInfo;
