import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormConrols";
import style from '../MyPosts.module.css';


export type FormDataPostType = {
    addPost: string
}

let maxLength = maxLengthCreator(30)

const PostsForm = (props: InjectedFormProps<FormDataPostType>) => {

    return <form onSubmit={props.handleSubmit}>
        <div className={style.inputForm}><Field component={Textarea} name={'addPost'} validate={[requiredField, maxLength]} placeholder={'hi'}  /></div>
        <div>
            <button className={style.buttonPost}>Add message</button>
        </div>
    </form>
}

const PostsReduxForm = reduxForm<FormDataPostType>(
    {
        form: 'messageForm'
    }
)(PostsForm)

export default PostsReduxForm