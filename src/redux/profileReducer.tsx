import {AddNewMessageType, NewMessageFunctionType} from "./dialogsReducer";

export type usersProfilePhotosType = {
    small: string
    large: string
}

export type contactsUsersPropsType = {
    skype: string
    vk: string
    facebook: string
    icq: string
    email: string
    googlePlus: string
    twitter: string
    instagram: string
    whatsApp: string
}

export type profileUsersPropsType = {
    aboutMe: string | null
    contacts: contactsUsersPropsType | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: usersProfilePhotosType | null

}

export type postsPropsType = {
    id: number
    message: string
    likeCount: number
}

export type profilePropsType = {
    posts: Array<postsPropsType>
    newPostText: string
    profile: profileUsersPropsType
}

export type AddPostDispatchType = {
    type: 'ADD-POST',
    newText: string

}

export type NewPostTextFunctionType = {
    type: 'NEW-POST-TEXT-FUNCTION'
    newText: string
}

export type SetUsersProfile = {
    type: 'SET-USERS-PROFILE'
    profile: profileUsersPropsType
}

export type actionType = AddPostDispatchType
    | NewPostTextFunctionType
    | AddNewMessageType
    | NewMessageFunctionType
    | SetUsersProfile


let initialState: profilePropsType = {
    posts: [
        {id: 1, message: 'My first post', likeCount: 11},
        {id: 2, message: 'Hi, how are you', likeCount: 21},
    ],
    newPostText: '',
    profile: {
        aboutMe: '',
        contacts: {
            skype: '',
            vk: '',
            facebook: '',
            icq: '',
            email: '',
            googlePlus: '',
            twitter: '',
            instagram: '',
            whatsApp: ''
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 1,
        photos: {
            small: '',
            large: ''
        }
    }
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

        case "SET-USERS-PROFILE": {
            return {
                ...state,
                profile: action.profile
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

export const setUsersProfile = (profile: profileUsersPropsType): SetUsersProfile => {
    return {type: "SET-USERS-PROFILE", profile}
}


export default profileReducer;