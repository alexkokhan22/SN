import React from 'react';
import {NavLink} from 'react-router-dom';


type DialogsItemPropsType = {
    name: string
    id: number
}

const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogsItem;