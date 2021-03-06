import React, {useState} from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import {profileUsersPropsType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";
import avatar
    from '../../../assets/images/5.jpg'
import ProfileData from "./ProfileData";
import {FormProfileDataType, ProfileDataReduxForm} from "./ProfileDataReduxForm";


type ProfileInfoPropsType = {
    profile: profileUsersPropsType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (files: File) => void
    saveProfile: (formData: FormProfileDataType) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    const goToEditMode = () => {
        setEditMode(true)
    }


    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files)
            props.savePhoto(e.target.files[0])
    }

    const setSubmit = async (formData: FormProfileDataType) => {
        await props.saveProfile(formData)
        setEditMode(false)
    }


    return (
        <div className={classes.profileInfo}>
            <div className={classes.avatar}>
                <div className={classes.avatarContainer}>
                    <img className={classes.myPhoto} src={props.profile.photos.large || avatar}/>
                    <div>{props.isOwner && <div className={classes.spanPhoto}>Download photo</div>}</div>
                    <div>{props.isOwner &&
                    <input className={classes.inputFile} type={'file'} onChange={mainPhotoSelected}/>}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                {editMode
                    ? <ProfileDataReduxForm profile={props.profile} initialValues={props.profile} onSubmit={setSubmit}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={goToEditMode}/>
                }
            </div>
        </div>
    );
}


export default ProfileInfo;