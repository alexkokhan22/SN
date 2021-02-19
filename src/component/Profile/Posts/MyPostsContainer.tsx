import React from "react";
import {
    addPostActionCreator,
    AddPostDispatchType,
    NewPostTextFunctionType,
    onChangeActionCreator, postsPropsType, profilePropsType,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StatePropsType} from "../../../redux/reduxStore";



export type MyPostsContainerPropsType = {
    state: StatePropsType
    dispatch: (action: AddPostDispatchType | NewPostTextFunctionType) => void
}


const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    let addPost = () => {
        {
            props.dispatch(addPostActionCreator());
        }
    }

    let updateText = (text: string) => {
        props.dispatch(onChangeActionCreator(text))
    }

    return <MyPosts
        updateText={updateText}
        addPost={addPost}
        state={props.state.profile.posts}
        newPostText={props.state.profile.newPostText}
    />
}

export default MyPostsContainer;