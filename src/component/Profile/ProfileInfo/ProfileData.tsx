import React from "react";
import {profileUsersPropsType} from "../../../redux/profileReducer";
import classes from "./ProfileInfo.module.css"


type ProfileDataType = {
    profile: profileUsersPropsType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData = (props: ProfileDataType) => {
    return (
        <div className={classes.profileDataContainer}>
            <div><span>Full name:</span> {props.profile.fullName}</div>
            <div><span>Looking for a Job:</span> {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div><span>My professional skills:</span> {props.profile.lookingForAJobDescription}</div>
            <div><span>About Me:</span> {props.profile.aboutMe}</div>
            <div className={classes.contactsContainer}><span>Contacts:</span> {Object.keys(props.profile.contacts).map((key) => {
                return <ContactsProfile key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
            {props.isOwner && <div>
                <button className={classes.buttonEdit} onClick={props.goToEditMode}>edit</button>
            </div>}
        </div>
    )
}


type ContactsProfileType = {
    contactTitle: string
    contactValue: string
}

const ContactsProfile = (props: ContactsProfileType) => {
    return <div>{props.contactTitle}: {props.contactValue}</div>
}

export default ProfileData;