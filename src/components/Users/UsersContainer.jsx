import React from 'react';
import UsersAPIComponent from './UsersAPIComponent';
import {connect} from 'react-redux';
import {
    setCurrentPage, toggleIsFetching,
    toggleFollowingProgress, getUsers, unfollow, follow
} from "../../Redux/usersReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

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

export default compose (
    connect(mapStateToProps, {
    follow, setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers,}),
)(UsersAPIComponent);