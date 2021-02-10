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

export type postsPropsType = {
    id: number
    message: string
    likeCount: number
}

export type profilePropsType = {
    posts: Array<postsPropsType>
    newPostText: string
}


export type StatePropsType = {
    profile: profilePropsType
    dialogs: dialogsPropsType
}

export type AddPostDispatchType = {
    type: 'ADD-POST'

}

export type NewPostTextFunctionType = {
    type: 'NEW-POST-TEXT-FUNCTION'
    newText: string
}

export type StoreType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _render: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: AddPostDispatchType | NewPostTextFunctionType) => void

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
            ]
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
        if(action.type === 'ADD-POST') {
            let newPost: postsPropsType = {
                id: 3,
                message: this._state.profile.newPostText,
                likeCount: 0
            }
            this._state.profile.posts.push(newPost)
            this._render();

        } else if (action.type === 'NEW-POST-TEXT-FUNCTION') {
            this._state.profile.newPostText = action.newText;
            this._render();
        }
    }
}




export default store;