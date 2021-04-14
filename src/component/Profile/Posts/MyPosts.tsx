import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import PostsReduxForm, { FormDataPostType } from "./postForm/PostForm";


const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElement = props.profile.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)


    let addPost = (value: FormDataPostType) => {
        props.addPost(value.addPost)
    }


    return (
        <div>
            <div className={classes.item}>
                <h3>My post</h3>
            </div>
            <PostsReduxForm onSubmit={addPost}/>
            <div>
                {postElement}
            </div>

        </div>
    );
}

export default MyPosts;