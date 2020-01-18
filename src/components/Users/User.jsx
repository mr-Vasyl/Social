import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../img/user.jpg'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unFollow, follow}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            unFollow(user.id);
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
            <div>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </div>
        </div>
    )

}

export default User;
