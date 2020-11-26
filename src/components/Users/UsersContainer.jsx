import React from 'react';
import UsersAPIComponent from './UsersAPIComponent';
import {connect} from 'react-redux';
import {getUsers, toggleFollowingProgress, unfollow, follow, setCurrentPage
} from "../../Redux/usersReducer";
import {compose} from "redux";
import {
    getUsersFromState,
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../Redux/users-selectors";

/*let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    };
}*/

let mapStateToProps = (state) => {
    return {
        users:getUsersFromState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    };
}

export default compose (
    connect(mapStateToProps,
        {follow, setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers}),
)(UsersAPIComponent);