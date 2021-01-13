import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css'


type DialogsItemPropsType = {
    name: string
    id: string
}

const DialogsItem = (props: DialogsItemPropsType) => {
    return (
        <div className={classes.item + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagesPropsType = {
    message: string
}

const Messages = (props: MessagesPropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )

}


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogsItem name={'Alex'} id={'1'}/>
                <DialogsItem name={'Roma'} id={'2'}/>
                <DialogsItem name={'Lera'} id={'3'}/>
            </div>
            <div className={classes.messages}>
                <Messages message={'Hi'}/>
                <Messages message={'How are you ?'}/>
            </div>
        </div>
    )
}

export default Dialogs;