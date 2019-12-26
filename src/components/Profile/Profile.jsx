import React from 'react';
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer';


const Profile = (props) => {

    return (
        <main>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </main>
    )
}


export default Profile;
