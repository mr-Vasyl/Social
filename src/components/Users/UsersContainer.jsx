import React from 'react'
import {connect} from 'react-redux'
import {compose} from "redux";

import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader.jsx";
import {
    follow, requestUsers, setCurrentPage,
    toggleFollowingProgress, unFollow
} from "../../Redux/UsersReducer";

import {
    getAuth,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUCurrentPage, getUsers
} from "../../Redux/UsersSelector";


class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   isAuth={this.props.isAuth}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getUCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getAuth(state)

    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unFollow,
        setCurrentPage,
        toggleFollowingProgress, getUsers: requestUsers
    }),
)(UsersContainer)

