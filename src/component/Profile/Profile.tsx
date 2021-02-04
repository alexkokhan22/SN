import React from "react";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePropsType} from "../../redux/state";


export type ProfilePropsType = {
    state: profilePropsType
    addPost: () => void
    newPostText: string
    newPostTextFunction: (newText: string) => void
}


const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     newPostTextFunction={props.newPostTextFunction}
            />
        </div>
    );
}

export default Profile;