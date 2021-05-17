export type messagePropsType = {
    id: number
    message: string
}

export type dialogPropsType = {
    id: number
    name: string
}

export type dialogsPropsType = {
    dialogs: Array<dialogPropsType>
    messages: Array<messagePropsType>
}

export type AddNewMessageType = {
    type: 'dialogs/Add-New-Message',
    addMessage: string
    newTextMessage: string
}

export type actionDialogsType = AddNewMessageType

let initialState: dialogsPropsType = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Roma'},
        {id: 3, name: 'Lera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you ?'}
    ]
}


const dialogsReducer = (state = initialState, action: actionDialogsType): dialogsPropsType => {
    switch (action.type) {
        case 'dialogs/Add-New-Message':
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.addMessage}],
            }
        default:
            return state

    }

}

export const onClickMessageActionCreator = (addMessage: string): AddNewMessageType => {
    return {type: 'dialogs/Add-New-Message', addMessage, newTextMessage: ''}
}


export default dialogsReducer;