import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.postsData
        .map ((currentPost)=> <Post post = {currentPost.post} likesCount = {currentPost.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST',});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', text: text,});
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value ={props.newPostText}></textarea>
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