import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormConrols";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";


export type FormDataType = {
    addMessage: string
}
let maxLength = maxLengthCreator(100)

const MessageForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field component={Textarea} name={'addMessage'} validate={[requiredField, maxLength]}/></div>
        <div>
            <button>Add message</button>
        </div>
    </form>
}

const MessageReduxForm = reduxForm<FormDataType>(
    {
        form: 'messageForm'
    }
)(MessageForm)

export default MessageReduxForm