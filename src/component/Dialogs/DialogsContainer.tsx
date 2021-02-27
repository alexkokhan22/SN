import React from 'react';
import {
    dialogsPropsType,
    onChangeMessageActionCreator,
    onClickMessageActionCreator
} from "../../redux/dialogsReducer";
import {AppStatePropsType} from "../../redux/reduxStore";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    dialogs: dialogsPropsType
    newMessageText: string
}

type mapDispatchToPropsType = {
    onChangeText: () => void
    addMessage: (text: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStatePropsType): mapStateToPropsType => {
    return {
        dialogs: state.dialogs,
        newMessageText: state.dialogs.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onChangeText: () => {
            dispatch(onClickMessageActionCreator())
        },
        addMessage: (text: string) => {
            dispatch(onChangeMessageActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;