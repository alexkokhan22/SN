import {contactsUsersPropsType, profileUsersPropsType} from "../../../redux/profileReducer";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import loginStyles from "../../login/login.module.css";
import {Input, Textarea} from "../../common/FormsControls/FormConrols";

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
            <div>
                <div>
                    <button>save</button>
                </div>
                <div>Full name: <Field component={Input} name={'fullName'} placeholder={'full Name'}/></div>
                <div>Looking for a Job: <Field
                    component={Input}
                    type={'checkbox'}
                    name={'lookingForAJob'}/>
                </div>
                <div>My professional skills: <Field
                    component={Textarea}
                    name={'lookingForAJobDescription'}
                    placeholder={'My professional skills'}/>
                </div>
                <div>About Me: <Field
                    component={Textarea}
                    name={'aboutMe'}
                    placeholder={'about Me'}/>
                </div>
                <div>Contacts: {Object.keys(props.profile.contacts).map((key) => {
                    return <div key={key}>{key}: <Field
                        component={Input}
                        name={'contacts.' + key}
                        placeholder={key}
                    />
                    </div>
                })}
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


