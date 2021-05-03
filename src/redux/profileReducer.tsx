import {AddNewMessageType, NewMessageFunctionType} from "./dialogsReducer";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";


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
    profile: profileUsersPropsType
    status: string
}

export type AddPostDispatchType = {
    type: 'ADD-POST',
    addPost: string

}


export type SetUsersProfile = {
    type: 'SET-USERS-PROFILE'
    profile: profileUsersPropsType
}

export type SetUsersStatus = {
    type: 'SET-USERS-STATUS'
    status: string
}

export type actionProfileType = AddPostDispatchType
    | SetUsersProfile
    | SetUsersStatus


let initialState: profilePropsType = {
    posts: [
        {id: 1, message: 'My first post', likeCount: 11},
        {id: 2, message: 'Hi, how are you', likeCount: 21},
    ],
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
    },
    status: ''
}


const profileReducer = (state = initialState, action: actionProfileType) => {
    // logic switch
    switch (action.type) {
        case "ADD-POST": {
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.addPost, likeCount: 0}],
            }
        }

        case "SET-USERS-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }

        case "SET-USERS-STATUS": {
            return {
                ...state,
                status: action.status
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

export const addPostActionCreator = (addPost: string): AddPostDispatchType => {
    return {type: "ADD-POST", addPost}

}


export const setStatusActionCreator = (status: string): SetUsersStatus => {
    return {
        type: "SET-USERS-STATUS", status
    }
}

export const setUsersProfile = (profile: profileUsersPropsType): SetUsersProfile => {
    return {type: "SET-USERS-PROFILE", profile}
}

export const setUsersProfileThunk = (userId: string) => (dispatch: Dispatch) => {
    profileApi.setUsersProfile(userId)
        .then((data) => {
            dispatch(setUsersProfile(data))
        })
}

export const getUsersStatusThunk = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then((data) => {
            dispatch(setStatusActionCreator(data))
        })
}

export const updateUsersStatusThunk = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then((data) => {
            if(data.resultCode === 0) {
                dispatch(setStatusActionCreator(status))
            }

        })
}

export default profileReducer;