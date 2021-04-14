import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {DialogsPropsType} from "./DialogsContainer";
import MessageReduxForm, { FormDataType } from './messageForm/MessageForm';


const Dialogs = (props: DialogsPropsType) => {

    let dialogsItem = props.dialogs.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)
    let messageItem = props.dialogs.messages.map(m => <Messages message={m.message} key={m.id}/>)

    let addNewMessage = (values: FormDataType) => {
        props.onChangeText(values.addMessage)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsItem}
            </div>
            <div className={classes.messages}>
                {messageItem}
            </div>
            <MessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs;