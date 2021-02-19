import profileReducer, { AddPostDispatchType, NewPostTextFunctionType } from "./profileReducer";
import dialogsReducer, { AddNewMessageType, NewMessageFunctionType } from "./dialogsReducer";

 type messagePropsType = {
    id: number
    message: string
}


 type dialogPropsType = {
    id: number
    name: string
}


 type dialogsPropsType = {
    dialogs: Array<dialogPropsType>
    messages: Array<messagePropsType>
    newMessageText: string
}

 type postsPropsType = {
    id: number
    message: string
    likeCount: number
}

 type profilePropsType = {
    posts: Array<postsPropsType>
    newPostText: string
}

 type StatePropsType = {
    profile: profilePropsType
    dialogs: dialogsPropsType
}

type actionType = AddPostDispatchType | NewPostTextFunctionType | AddNewMessageType | NewMessageFunctionType

type StoreType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _render: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: actionType) => void

}

let store: StoreType = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: 'My first post', likeCount: 11},
                {id: 2, message: 'Hi, how are you', likeCount: 21},
            ],
            newPostText: ''
        },
        dialogs: {
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
    },
    _render() {
        console.log('hello')
    },


    getState() {
        return this._state
    },

    subscribe(callback) {
        this._render = callback;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._render();
    }
}



export default store;