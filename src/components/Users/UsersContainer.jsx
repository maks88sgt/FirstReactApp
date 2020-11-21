import React from 'react';
import UsersAPIComponent from './UsersAPIComponent';
import {connect} from 'react-redux';
import {
    followSuccess, setCurrentPage, toggleIsFetching,
    unFollowSuccess, toggleFollowingProgress, getUsers, unfollow, follow
} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    };
}

let UsersContainer = connect(mapStateToProps, {
    follow, setCurrentPage,
    toggleIsFetching, unfollow,
    toggleFollowingProgress, getUsers,
}) (UsersAPIComponent);

export default UsersContainer;