import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import {profileUsersPropsType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: profileUsersPropsType
    status :string
    updateStatus :(status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profileInfo}>
            <div className={classes.img}><img src={'https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png'}/></div>
            <div className={classes.ava}>
                <img src={props.profile.photos?.large}/>
                <ProfileStatus status = {props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;