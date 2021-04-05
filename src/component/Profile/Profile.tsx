import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import {profileUsersPropsType} from "../../redux/profileReducer";


type ProfilePropsType = {
    profile: profileUsersPropsType
    status :string
    updateStatus :(status: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus = {props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;