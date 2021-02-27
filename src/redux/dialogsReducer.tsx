import {AddPostDispatchType, NewPostTextFunctionType} from "./profileReducer";

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
    newMessageText: string
}

export type AddNewMessageType = {
    type: 'Add-New-Message',
    newTextMessage: string
}

export type NewMessageFunctionType = {
    type: 'New-Message-Function',
    newMessageText: string
}

export type actionType = AddPostDispatchType | NewPostTextFunctionType | AddNewMessageType | NewMessageFunctionType

let initialState: dialogsPropsType  = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Roma'},
        {id: 3, name: 'Lera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you ?'}
    ],
    newMessageText: ''
}


const dialogsReducer = (state = initialState, action: actionType): dialogsPropsType => {
    switch (action.type) {
        case "Add-New-Message":
            return  {
                ...state,
                messages: [...state.messages, {id: 4, message: state.newMessageText}],
                newMessageText: action.newTextMessage

            }
            //state.messages.push(newMessage);
           // state.newMessageText = action.newTextMessage;
        case "New-Message-Function":
            return  {
                ...state,
                newMessageText: action.newMessageText
            }
            //state.newMessageText = action.newMessageText;
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

export const onClickMessageActionCreator = (): AddNewMessageType => {
    return {type: 'Add-New-Message', newTextMessage: ""}
}

export const onChangeMessageActionCreator = (text: string): NewMessageFunctionType => {
    return {type: 'New-Message-Function', newMessageText: text}
}

export default dialogsReducer;