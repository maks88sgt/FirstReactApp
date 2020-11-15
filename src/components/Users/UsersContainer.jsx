import React from 'react';
import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from 'react-redux';
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator, setUsersTotalCountActionCreator,
    unFollowActionCreator
} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage(pageNumber) {
            dispatch (setCurrentPageActionCreator(pageNumber));
        },
        setTotalCount(totalCount) {
            dispatch (setUsersTotalCountActionCreator(totalCount));
        }
    };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent);

export default UsersContainer;