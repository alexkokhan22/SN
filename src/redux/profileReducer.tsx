import {AddNewMessageType, NewMessageFunctionType} from "./dialogsReducer";

export type postsPropsType = {
    id: number
    message: string
    likeCount: number
}

export type profilePropsType = {
    posts: Array<postsPropsType>
    newPostText: string
}

export type AddPostDispatchType = {
    type: 'ADD-POST',
    newText: string

}

export type NewPostTextFunctionType = {
    type: 'NEW-POST-TEXT-FUNCTION'
    newText: string
}

export type actionType = AddPostDispatchType | NewPostTextFunctionType | AddNewMessageType | NewMessageFunctionType


let initialState: profilePropsType = {
    posts: [
        {id: 1, message: 'My first post', likeCount: 11},
        {id: 2, message: 'Hi, how are you', likeCount: 21},
    ],
    newPostText: ''
}


const profileReducer = (state = initialState, action: actionType) => {
    // logic switch
    switch (action.type) {
        case "ADD-POST": {
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: state.newPostText, likeCount: 0}],
                newPostText: action.newText
            }
        }
        case "NEW-POST-TEXT-FUNCTION": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }


    /*  logic if/else
        if (action.type === 'ADD-POST') {
            let newPost: postsPropsType = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = action.newText


        } else if (action.type === 'NEW-POST-TEXT-FUNCTION') {
            state.newPostText = action.newText;
        }
        return state */
}

export const addPostActionCreator = (): AddPostDispatchType => {
    return {type: "ADD-POST", newText: ""}

}

export const onChangeActionCreator = (text: string): NewPostTextFunctionType => {
    return {
        type: "NEW-POST-TEXT-FUNCTION",
        newText: text
    }
}


export default profileReducer;