import React, {ChangeEvent} from 'react';
import {
    AddNewMessageType,
    NewMessageFunctionType,
    onChangeMessageActionCreator,
    onClickMessageActionCreator
} from "../../redux/dialogsReducer";
import {StatePropsType} from "../../redux/reduxStore";
import Dialogs from './Dialogs';


type DialogsContainerPropsType = {
    state: StatePropsType
    dispatch: (action: AddNewMessageType | NewMessageFunctionType) => void

}


const DialogsContainer = (props: DialogsContainerPropsType) => {

    let addMessage = () => {
        props.dispatch(onClickMessageActionCreator())
    }

    let onChangeText = (text: string) => {
        props.dispatch(onChangeMessageActionCreator(text))
    }


    return <Dialogs
        state={props.state.dialogs}
        onChangeText={onChangeText}
        addMessage={addMessage}
        newMessageText={props.state.dialogs.newMessageText}
    />
}

export default DialogsContainer