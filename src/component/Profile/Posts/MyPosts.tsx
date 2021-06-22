import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import PostsReduxForm, {FormDataPostType} from "./postForm/PostForm";


const MyPosts = React.memo( (props: MyPostsPropsType) => {

    let postElement = props.profile.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)
    let addPost = (value: FormDataPostType) => {
        props.addPost(value.addPost)
    }

    return (
        <div className={classes.postsContainer}>
            <div className={classes.item}>
                <h2>My post</h2>
            </div>
            <div className={classes.addPostContainer}>
                <PostsReduxForm onSubmit={addPost}/>
                <div className={classes.postContainer}>{postElement}</div>
            </div>

        </div>
    );
})

export default MyPosts;