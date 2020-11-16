import React from 'react';
import UsersAPIComponent from './UsersAPIComponent';
import {connect} from 'react-redux';
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator, setUsersTotalCountActionCreator, toggleIsFetchingActionCreator,
    unFollowActionCreator
} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        },
        toggleIsFetching (isFetching){
            dispatch (toggleIsFetchingActionCreator(isFetching));
        }
    };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent);

export default UsersContainer;