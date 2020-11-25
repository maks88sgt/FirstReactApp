import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilites/validators";
import {Textarea} from "../../common/FormsControl/FormsControls";

let maxLength = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder={'Enter new post text'}
                component={Textarea}
                name={'newPostBody'}
                validate = {[required, maxLength]}
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
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div className={styles.posts}>
                {postsElements}
            </div>
            <AddNewPostReduxForm onSubmit={addNewPost}/>
        </div>
    );
}

export default MyPosts;