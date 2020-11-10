import React from 'react';
import Users from "./Users";
import {connect} from 'react-redux';
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
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
    };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;