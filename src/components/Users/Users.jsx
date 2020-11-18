import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../defaultUser.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                    <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "3fb7a1a3-24b6-43a1-8418-563e9e0f87e4",
                            },
                        },).then(response => {

                            if (response.data.resultCode === 0) {
                                props.unFollow(u.id)
                            }
                            ;
                        });
                    }}> Unfollow </button> :
                    <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "3fb7a1a3-24b6-43a1-8418-563e9e0f87e4",
                            },
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                ;
                            });
                    }}> Follow </button>}
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