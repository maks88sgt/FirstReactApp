import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/preloader";
import {getUsers} from "../../API/api";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).
        then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        debugger;
        this.props.toggleIsFetching(true);
        getUsers(pageNumber, this.props.pageSize).
        then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
            this.props.setCurrentPage(pageNumber);
        });

    };

    debugger;

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        </>
    };
};

export default UsersAPIComponent;