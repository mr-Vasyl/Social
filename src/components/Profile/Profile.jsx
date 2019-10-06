import React from 'react';
import s from "./Profile.module.css"
import MyPosts from './Myposts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer';


const Profile = (props) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </main>
    )
}


export default Profile;
