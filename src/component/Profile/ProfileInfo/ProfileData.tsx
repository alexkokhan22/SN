import React from "react";
import {profileUsersPropsType} from "../../../redux/profileReducer";


type ProfileDataType = {
    profile: profileUsersPropsType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData = (props: ProfileDataType) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>edit</button>
            </div>}
            <div>Full name: {props.profile.fullName}</div>
            <div>Looking for a Job: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div>My professional skills: {props.profile.lookingForAJobDescription}</div>
            <div>About Me: {props.profile.aboutMe}</div>
            <div>Contacts: {Object.keys(props.profile.contacts).map((key) => {
                return <ContactsProfile key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
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