import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const AddNewPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder={'Enter new post text'}
                component={'input'}
                name={'newPostBody'}
            />
        </div>
        <button>Add post</button>
    </form>)
}

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);


const MyPosts = (props) => {

    let postsElements = props.posts
        .map((currentPost) => <Post post={currentPost.post} likesCount={currentPost.likesCount}/>);

    let addNewPost = (values) => {
        console.log(values);
        props.addPost(values.newPostBody);

    };


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.posts}>
                {postsElements}
            </div>
            <AddNewPostReduxForm onSubmit={addNewPost}/>
        </div>
    );
}

export default MyPosts;