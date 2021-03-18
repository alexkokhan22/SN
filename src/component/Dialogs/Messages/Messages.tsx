import React from 'react';
import classes from './../Dialogs.module.css'


type MessagesPropsType = {
    message: string
}

const Messages: React.FC <MessagesPropsType> = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )

}

export default Messages;