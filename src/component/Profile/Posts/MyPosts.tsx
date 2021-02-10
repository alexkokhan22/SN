import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import Post, {MessagePropsType} from "./Post/Post";
import {AppPropsType} from "../../../App";
import {AddPostDispatchType, NewPostTextFunctionType, postsPropsType, profilePropsType} from "../../../redux/store";

export type MyPostsPropsType = {
    state: Array<postsPropsType>
    dispatch: (action: AddPostDispatchType | NewPostTextFunctionType) => void
    newPostText: string
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElement = props.state.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
         {
            props.dispatch({type: "ADD-POST"});
            props.dispatch({type: "ADD-POST"})
        }
    }

    let onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'NEW-POST-TEXT-FUNCTION', newText:e.currentTarget.value})
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