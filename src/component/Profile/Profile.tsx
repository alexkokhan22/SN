import React from "react";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostDispatchType, NewPostTextFunctionType, profilePropsType} from "../../redux/store";


export type ProfilePropsType = {
    state: profilePropsType
    dispatch: (action: AddPostDispatchType | NewPostTextFunctionType) => void
    newPostText: string

}


const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.posts}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
            />
        </div>
    );
}

export default Profile;