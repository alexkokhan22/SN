import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {actionType, profilePropsType} from "../../redux/profileReducer";
import MyPostsContainer from "./Posts/MyPostsContainer";
import {StatePropsType} from "../../redux/reduxStore";


export type ProfilePropsType = {
    state: StatePropsType
    dispatch: (action: actionType) => void
}


const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;