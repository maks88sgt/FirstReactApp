import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../defaultUser.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import UserAPI from "../../API/api";
import UsersAPI from "../../API/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map((p) => <span
                className={props.currentPage === p && styles.selectedPage}
                onClick={() => {
                    props.onPageChanged(p)
                }}
            >{p}</span>)
            }
        </div>

        {props.users.map(u => <div key={u.id}>
        <span>
            <NavLink to={'profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
            </NavLink>
            <div>
                {u.followed ?
                    <button disabled = {props.followingProgress.some(id => id == u.id)}
                            onClick={() => {props.unfollow(u.id)}}>
                        Unfollow
                    </button> :
                    <button disabled = {props.followingProgress.some(id => id == u.id)}
                            onClick={() => {props.follow(u.id)}}>
                        Follow
                    </button>
                }
            </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
            <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                    </span>
        </div>)}
    </div>);
}
export default Users;