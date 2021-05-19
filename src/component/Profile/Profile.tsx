import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import {profileUsersPropsType} from "../../redux/profileReducer";
import { FormProfileDataType } from "./ProfileInfo/ProfileDataReduxForm";


type ProfilePropsType = {
    profile: profileUsersPropsType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (files: File) => void
    saveProfile: (formData: FormProfileDataType) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;