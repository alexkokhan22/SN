import {Dispatch} from 'redux';
import {profileApi} from '../api/api';

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
    photos: usersProfilePhotosType

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
    type: 'profile/ADD-POST',
    addPost: string
}
export type SetUsersProfile = {
    type: 'profile/SET-USERS-PROFILE'
    profile: profileUsersPropsType
}
export type SetUsersStatus = {
    type: 'profile/SET-USERS-STATUS'
    status: string
}
export type DeletePostsType = ReturnType<typeof deletePostsAC>
export type savePhotosUsersType = ReturnType<typeof saveUsersPhotoProfile>
export type actionProfileType =
    AddPostDispatchType
    | SetUsersProfile
    | SetUsersStatus
    | DeletePostsType
    | savePhotosUsersType

let initialState: profilePropsType = {
    posts: [
        {id: 1, message: ' My first post', likeCount: 11},
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
    switch (action.type) {
        case 'profile/ADD-POST': {
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.addPost, likeCount: 0}],
            }
        }

        case 'profile/SET-USERS-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }

        case 'profile/SET-USERS-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }

        case 'profile/DELETE-POSTS': {
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId)
            }
        }

        case "profile/SAVE-USERS-PHOTO-PROFILE": {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        default:
            return state;
    }
}


export const addPostActionCreator = (addPost: string): AddPostDispatchType => {
    return {type: 'profile/ADD-POST', addPost}

}


export const setStatusActionCreator = (status: string): SetUsersStatus => {
    return {
        type: 'profile/SET-USERS-STATUS', status
    }
}

export const deletePostsAC = (postId: number) => {
    return {
        type: 'profile/DELETE-POSTS', postId
    } as const
}

export const setUsersProfile = (profile: profileUsersPropsType): SetUsersProfile => {
    return {type: 'profile/SET-USERS-PROFILE', profile}
}

export const saveUsersPhotoProfile = (photos: usersProfilePhotosType) => {
    return {type: 'profile/SAVE-USERS-PHOTO-PROFILE', photos} as const
}

export const setUsersProfileThunk = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.setUsersProfile(userId)
    dispatch(setUsersProfile(response))
}

export const getUsersStatusThunk = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.getStatus(userId)
    dispatch(setStatusActionCreator(response))
}

export const updateUsersStatusThunk = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatusActionCreator(status))
    }
}

export const savePhotoThunk = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(saveUsersPhotoProfile(response.data.data.photos))
    }
}


export default profileReducer;