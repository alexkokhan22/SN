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
    type: 'Add-New-Message',
    addMessage: string
    newTextMessage: string
}

export type NewMessageFunctionType = {
    type: 'New-Message-Function',
    newMessageText: string
}

export type actionType = AddNewMessageType

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


const dialogsReducer = (state = initialState, action: actionType): dialogsPropsType => {
    switch (action.type) {
        case "Add-New-Message":
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.addMessage}],
            }
        //state.messages.push(newMessage);
        // state.newMessageText = action.newTextMessage;
        default:
            return state

    }


    /* logic if/else
    if (action.type === 'Add-New-Message') {
        let newMessage: messagePropsType = {
            id: 4,
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = action.newTextMessage

    } else if (action.type === 'New-Message-Function') {
        state.newMessageText = action.newMessageText
    }

    return state
    */
}

export const onClickMessageActionCreator = (addMessage: string): AddNewMessageType => {
    return {type: 'Add-New-Message', addMessage, newTextMessage: ""}
}


export default dialogsReducer;