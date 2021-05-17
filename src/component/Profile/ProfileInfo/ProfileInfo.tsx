import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import {profileUsersPropsType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";
import avatar from '../../../assets/images/kisspng-avatar-user-computer-icons-software-developer-5b327cc9cc15f7.872727801530035401836.png'

type ProfileInfoPropsType = {
    profile: profileUsersPropsType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (files: File) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files)
            props.savePhoto(e.target.files[0])
    }

    return (
        <div className={classes.profileInfo}>
            {/*<div className={classes.img}><img src={'https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png'}/></div>*/}
            <div className={classes.ava}>
                <img className={classes.myPhoto} src={props.profile.photos.large || avatar}/>
                {props.isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;