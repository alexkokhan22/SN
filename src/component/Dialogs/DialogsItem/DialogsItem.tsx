import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './../Dialogs.module.css'


type DialogsItemPropsType = {
    name: string
    id: number
}

const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    return (
        <div className={classes.item + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}



export default DialogsItem;