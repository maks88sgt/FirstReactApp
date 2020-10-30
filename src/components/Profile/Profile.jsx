import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <img className={classes.image} src='https://www.nastol.com.ua/download.php?img=201705/2560x1600/nastol.com.ua-225408.jpg' alt ='lake' />
            <div >
                ava + descript
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;