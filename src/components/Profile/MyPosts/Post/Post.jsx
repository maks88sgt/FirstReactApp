import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <span>Like </span>{props.likeCount}
            <div>
                <img className={classes.avatar} src ='https://million-wallpapers.ru/wallpapers/5/51/422650350151607/nejtiri-avatar-film.jpg'/>
                {props.message}
            </div>
        </div>
    );
}

export default Post;