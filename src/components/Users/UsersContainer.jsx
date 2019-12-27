import React from 'react'
import {connect} from 'react-redux'
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader.jsx";
import {
    follow, setCurrentPage, setUsers,
    setUsersTotalCount, toggleFollowingProgress, toggleIsFetching, unFollow
} from "../../Redux/UsersReducer";
import {usersAPI} from "../../Api/Api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })

    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       onPageChanged={this.onPageChanged}
                       toggleFollowingProgress = {this.props.toggleFollowingProgress}
                       followingInProgress = {this.props.followingInProgress}

                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers,
    setCurrentPage, setUsersTotalCount, toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer);