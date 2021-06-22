import {contactsUsersPropsType, profileUsersPropsType} from "../../../redux/profileReducer";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormConrols";
import classes from "./ProfileInfo.module.css"

interface IProps {
    profile: profileUsersPropsType
}

export type FormProfileDataType = {
    fullName: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    aboutMe: string | null
    contacts: contactsUsersPropsType
}


const ProfileDataForm: React.FC<InjectedFormProps<FormProfileDataType, IProps> & IProps> = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div className={classes.editDataContainer}>
                <div><span>Full name:</span> <Field component={Input} name={'fullName'} placeholder={'full Name'}/></div>
                <div><span>Looking for a Job:</span> <Field
                    component={Input}
                    type={'checkbox'}
                    name={'lookingForAJob'}/>
                </div>
                <div><span>My professional skills:</span> <Field
                    component={Textarea}
                    name={'lookingForAJobDescription'}
                    placeholder={'My professional skills'}/>
                </div>
                <div><span>About Me:</span> <Field
                    component={Textarea}
                    name={'aboutMe'}
                    placeholder={'about Me'}/>
                </div>
                <div className={classes.editContactsContainer}><span>Contacts:</span> {Object.keys(props.profile.contacts).map((key) => {
                    return <div key={key}>{key}: <Field
                        component={Input}
                        name={'contacts.' + key}
                        placeholder={key}
                    />
                    </div>
                })}
                </div>
                <div>
                    <button className={classes.buttonSave}>save</button>
                </div>
            </div>
        </form>
    </div>
}

export const ProfileDataReduxForm = reduxForm<FormProfileDataType, IProps>(
    {
        form: 'profileData'
    }
)(ProfileDataForm)


