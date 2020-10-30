import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img className={classes.image} src='https://www.nastol.com.ua/download.php?img=201705/2560x1600/nastol.com.ua-225408.jpg' alt ='lake' />
            <div className={classes.descriptionBlock}>
                ava + descript
            </div>
        </div>
    );
}

export default ProfileInfo;