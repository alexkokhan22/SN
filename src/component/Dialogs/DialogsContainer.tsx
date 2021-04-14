import React from 'react';
import {
    dialogsPropsType,
    onClickMessageActionCreator
} from "../../redux/dialogsReducer";
import {AppStatePropsType} from "../../redux/reduxStore";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirectComponent} from "../../HOC/WithAuthRedirectComponent";


type mapStateToPropsType = {
    dialogs: dialogsPropsType
}

type mapDispatchToPropsType = {
    onChangeText: (addMessage: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStatePropsType): mapStateToPropsType => {
    return {
        dialogs: state.dialogs,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onChangeText: (addMessage: string) => {
            dispatch(onClickMessageActionCreator(addMessage))
        }
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirectComponent)(Dialogs);