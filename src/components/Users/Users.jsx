import React from 'react'
import {Redirect} from "react-router-dom";

import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    const paginator = <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                                 totalItemsCount={totalUsersCount} pageSize={pageSize}/>;
    if (!props.isAuth) return <Redirect to="/login"/>;
    return (
        <div>
            {paginator}
            <div>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={props.followingInProgress}
                                         unFollow={props.unFollow}
                                         follow={props.follow}
                                         key={u.id}/>
                    )
                }
            </div>
            {paginator}
        </div>
    )
}

export default Users;
