import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {dialogsPropsType} from "../../redux/store";


type DialogsPropsType = {
    state: dialogsPropsType

}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsItem = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageItem = props.state.messages.map(m => <Messages message={m.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        let message = newMessage.current?.value
        alert(message)
    }



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsItem}
            </div>
            <div className={classes.messages}>
                {messageItem}
            </div>
            <textarea ref={newMessage}></textarea>
            <button onClick={addMessage}>add message</button>
        </div>
    )
}

export default Dialogs;