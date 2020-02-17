import React from 'react';
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer';


const Profile = (props) => {

    return (
        <div className={s.profileWrapper}>

                <ProfileInfo isOwner={props.isOwner} profile={props.profile}
                             status={props.status} updateStatus={props.updateStatus}
                             savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>


                <MyPostsContainer store={props.store}/>

        </div>
    )
}

export default Profile;
