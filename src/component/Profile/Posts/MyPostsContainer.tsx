import React from "react";
import {
    addPostActionCreator, profilePropsType
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStatePropsType} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStatePropsType = {
    profile: profilePropsType
}

type mapDispatchToPropsType = {
    addPost: (addPost: string) => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStatePropsType): mapStatePropsType => {
    return {
        profile: state.profile,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (addPost: string) => {
            dispatch(addPostActionCreator(addPost))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;