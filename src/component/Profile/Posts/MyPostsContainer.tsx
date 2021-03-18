import React from "react";
import {
    addPostActionCreator,
    onChangeActionCreator, profilePropsType
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStatePropsType} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStatePropsType = {
    profile: profilePropsType
    newPostText: string
}

type mapDispatchToPropsType = {
    addPost: () => void
    updateText: (text: string) => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStatePropsType): mapStatePropsType => {
    return {
        profile: state.profile,
        newPostText: state.profile.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateText: (text: string) => {
            dispatch(onChangeActionCreator(text))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;