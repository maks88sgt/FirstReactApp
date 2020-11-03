import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/store";

const MyPosts = (props) => {

    let postsElements = props.postsData.posts
        .map ((currentPost)=> <Post post = {currentPost.post} likesCount = {currentPost.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text)
        props.dispatch(action);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value ={props.postsData.newPostText}></textarea>
                </div>
                <button onClick = {addPost}>Add post</button>
                <button>Delete Post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;