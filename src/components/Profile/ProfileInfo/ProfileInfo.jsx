import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    return (
        <div>
            <img className={classes.image} src='https://www.nastol.com.ua/download.php?img=201705/2560x1600/nastol.com.ua-225408.jpg' alt ='lake' />
            <div className={classes.descriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.aboutMe}</div>
                <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;