/*export type locationPropsType = {
    country: string
    city: string
}*/

import {Dispatch} from "redux";
import {usersApi} from "../api/api";

type usersPhotosType = {
    small: string | null
    large: string | null
}


export type userPropsType = {
    id: number
    photos: usersPhotosType
    followed: boolean
    name: string
    status: string
    // location: locationPropsType
}

export type UsersPropsType = {
    users: Array<userPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type followACPropsType = {
    type: 'FOLLOW'
    userId: number
}

export type unfollowACPropsType = {
    type: 'UNFOLLOW'
    userId: number
}

export type setUsersACPropsType = {
    type: 'SET_USERS'
    users: Array<userPropsType>
}

export type changeCurrentPageType = {
    type: 'CHANGE_CURRENT_PAGE'
    currentPage: number
}

export type setTotalUsersCountType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalCount: number
}

export type isFetchingACType = {
    type: 'IS_FETCHING'
    isFetching: boolean
}

export type  followingInProgressType = {
    type: 'TOGGLE_FOLLOWING_IN_PROGRESS'
    isFetching: boolean
    usersId: number
}

export type actionUsersType = followACPropsType
    | unfollowACPropsType
    | setUsersACPropsType
    | changeCurrentPageType
    | setTotalUsersCountType
    | isFetchingACType
    | followingInProgressType


export let initialState: UsersPropsType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: actionUsersType): UsersPropsType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })]
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })]
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }

        case 'CHANGE_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case "IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }

        case "TOGGLE_FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.usersId]
                    : state.followingInProgress.filter(id => id != action.usersId)
            }
        default:
            return state
    }
}

export const follow = (userId: number): followACPropsType => {
    return {type: 'FOLLOW', userId}
}
export const unFollow = (userId: number): unfollowACPropsType => {
    return {type: 'UNFOLLOW', userId}
}

export const setUsers = (users: Array<userPropsType>): setUsersACPropsType => {
    return {type: 'SET_USERS', users}
}

export const changeCurrentPage = (currentPage: number): changeCurrentPageType => {
    return {type: 'CHANGE_CURRENT_PAGE', currentPage}
}

export const setTotalUsersCount = (totalCount: number): setTotalUsersCountType => {
    return {type: 'SET_TOTAL_USERS_COUNT', totalCount}
}

export const toggleIsFetching = (isFetching: boolean): isFetchingACType => {
    return {type: 'IS_FETCHING', isFetching}
}

export const toggleFollowingInProgress = (isFetching: boolean, usersId: number): followingInProgressType => {
    return {type: 'TOGGLE_FOLLOWING_IN_PROGRESS', isFetching, usersId}
}


export const getUserThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersApi.getUsers(currentPage, pageSize).then((data) => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}



export const unFollowThunk = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    usersApi.unFollowUsers(userId).then((data) => {
        if (data.resultCode == 0) {
            dispatch(unFollow(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
})}

export const followThunk = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    usersApi.followUsers(userId).then((data) => {
        if (data.resultCode == 0) {
            dispatch(follow(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    })}
