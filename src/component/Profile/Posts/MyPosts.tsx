import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import Post, {MessagePropsType} from "./Post/Post";
import {AppPropsType} from "../../../App";
import {postsPropsType, profilePropsType} from "../../../redux/state";

export type MyPostsPropsType = {
    state: Array<postsPropsType>
    addPost: () => void
    newPostText: string
    newPostTextFunction: (newText: string) => void
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElement = props.state.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
         {
            props.addPost();
            props.newPostTextFunction('')
        }
    }

    let onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newPostTextFunction(e.currentTarget.value)
    }

    return (
        <div>
            <div className={classes.item}>
                <h3>My post</h3>
            </div>

            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onChange}
                />
            </div>

            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div>
                {postElement}
            </div>

        </div>
    );
}

export default MyPosts;