import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {dialogsPropsType} from '../../redux/dialogsReducer';


type DialogsPropsType = {
    state: dialogsPropsType
    newMessageText: string
    addMessage: () => void
    onChangeText: (text: string) => void
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsItem = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageItem = props.state.messages.map(m => <Messages message={m.message}/>)


    let addMessage = () => {
        props.addMessage()
    }

    let onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onChangeText(text)

    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsItem}
            </div>
            <div className={classes.messages}>
                {messageItem}
            </div>
            <textarea onChange={onChangeText} value={props.newMessageText}></textarea>
            <button onClick={addMessage}>add message</button>
        </div>
    )
}

export default Dialogs;