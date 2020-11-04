import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map ((currentPost)=> <Post post = {currentPost.post} likesCount = {currentPost.likesCount}/>);

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value ={props.newPostText}>
                    </textarea>
                </div>
                <button onClick = {onAddPost}>Add post</button>
                <button>Delete Post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;