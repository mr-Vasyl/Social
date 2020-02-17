import React from 'react'
import {NavLink} from "react-router-dom";
import {Button} from 'antd';

import s from './Users.module.css'
import userPhoto from '../../img/user.svg'

let User = ({user, followingInProgress, unFollow, follow}) => {

    return (
        <div className={s.userProfile}>

            <div className={s.userInfo}>
                <NavLink to={'/profile/' + user.id}>
                    <img alt="userPhoto" src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={s.userPhoto}/>
                </NavLink>
                <div className={s.userFollow}>
                    {user.followed
                        ? <Button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            unFollow(user.id);
                        }}>Unfollow</Button>
                        : <Button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</Button>
                    }
                </div>
            </div>

            <div className={s.userDescription}>
                <div><b>Id: </b>{user.id}</div>
                <div><b>Name: </b>{user.name}</div>
                <div><b>Status: </b>{user.status}</div>
            </div>

        </div>
    )
}

export default User;
