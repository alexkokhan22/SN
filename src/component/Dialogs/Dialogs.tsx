import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {DialogsPropsType} from "./DialogsContainer";






const Dialogs = (props: DialogsPropsType) => {

    let dialogsItem = props.dialogs.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)
    let messageItem = props.dialogs.messages.map(m => <Messages message={m.message} key={m.id}/>)


    let addMessage = () => {
        props.onChangeText()
    }

    let onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.addMessage(text)

    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsItem}
            </div>
            <div className={classes.messages}>
                {messageItem}
            </div>
            <textarea onChange={onChangeText} value={props.dialogs.newMessageText}></textarea>
            <button onClick={addMessage}>add message</button>
        </div>
    )
}

export default Dialogs;