import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>New post</button>
                <button>Delete Post</button>
            </div>
            <Post message = 'Hi, how are you?' likeCount = '10'/>
            <Post message = "It's my first post" likeCount = '20'/>
        </div>
    );
}

export default MyPosts;