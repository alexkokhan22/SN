import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

import {
    postsPropsType, profilePropsType
} from "../../../redux/profileReducer";

export type MyPostsPropsType = {
    state: Array<postsPropsType>
    newPostText: string
    updateText: (text: string) => void
    addPost: () => void

}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElement = props.state.map(p => <Post message={p.message} likeCount={p.likeCount}/>)


    let addPost = () => {
        {
            props.addPost()
        }
    }

    let updateText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateText(text)

    }

    return (
        <div>
            <div className={classes.item}>
                <h3>My post</h3>
            </div>

            <div>
                <textarea
                    value={props.newPostText}
                    onChange={updateText}
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