import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../defaultUser.png'


let UsersFunc = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });

        /*props.setUsers (
            [
                {
                    id: 1,
                    followed: false,
                    photoUrl:'https://get.wallhere.com/photo/2560x1600-px-actors-Avatar-Fantastika-Fentezi-Miscellanea-movies-1687605.jpg',
                    fullName: 'Dmitriy',
                    status: 'Hi there!!',
                    location: {city: 'Murmansk', country: 'Russia'},
                },
                {
                    id: 2,
                    followed: false,
                    photoUrl: 'https://slgame.ru/img/2018/december/ubisoft-gotovit-igru-po-motivam-avatara_04-12-18-00-19-01.jpg',
                    fullName: 'Alexander',
                    status: 'Yo yo yo',
                    location: {city: 'Moscow', country: 'Russia'},
                },
                {
                    id: 3,
                    followed: true,
                    photoUrl: 'https://img2.goodfon.ru/original/600x1024/5/3d/avatar-neytiri-na-39-vi.jpg',
                    fullName: 'Egor',
                    status: 'In vocation',
                    location: {city: 'Minsk', country: 'Belarus'},
                },
                {
                    id: 4,
                    followed: false,
                    fullName: 'Mary',
                    photoUrl: 'https://wallpaperaccess.com/full/861953.jpg',
                    status: 'Nothing...',
                    location: {city: 'London', country: 'UK'},
                },
                {
                    id: 5,
                    followed: false,
                    photoUrl: 'https://cdn.wallpapersafari.com/11/23/pZXI2w.jpg',
                    fullName: 'Sergey',
                    status: 'I\'m on duty',
                    location: {city: 'Voronezh', country: 'Russia'},
                },
            ],
        )*/
    }
    ;


    return (<div>
        {props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
            </div>
            <div>
                {u.followed ?
                    <button onClick={() => {
                        props.unfollow(u.id)
                    }}> Unfollow </button> :
                    <button onClick={() => {
                        props.follow(u.id)
                    }}> Follow </button>}
            </div>
        </span>
            <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </span>
        </span>
        </div>)}
    </div>);
}

export default UsersFunc;