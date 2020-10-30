import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you?', likeCount : 20},
        {id: 2, message: 'It\'s my first post',likeCount : 11},
    ];
    let postsElements = postsData
        .map ((post)=> <Post message = {post.message}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>New post</button>
                <button>Delete Post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;