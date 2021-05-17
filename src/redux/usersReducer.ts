import {Dispatch} from 'redux';
import {usersApi} from '../api/api';

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
    type: 'users/FOLLOW'
    userId: number
}

export type unfollowACPropsType = {
    type: 'users/UNFOLLOW'
    userId: number
}

export type setUsersACPropsType = {
    type: 'users/SET_USERS'
    users: Array<userPropsType>
}

export type changeCurrentPageType = {
    type: 'users/CHANGE_CURRENT_PAGE'
    currentPage: number
}

export type setTotalUsersCountType = {
    type: 'users/SET_TOTAL_USERS_COUNT'
    totalCount: number
}

export type isFetchingACType = {
    type: 'users/IS_FETCHING'
    isFetching: boolean
}

export type  followingInProgressType = {
    type: 'users/TOGGLE_FOLLOWING_IN_PROGRESS'
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

export const usersFollowUnFollowReducer = (items: Array<userPropsType>, itemId: number, followed: boolean) => {
    return items.map(u => {
        if (u.id === itemId) {
            return {...u, followed}
        }
        return u;
    })
}

export const usersReducer = (state = initialState, action: actionUsersType): UsersPropsType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: usersFollowUnFollowReducer(state.users, action.userId, true)
                // users: [...state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })]
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: usersFollowUnFollowReducer(state.users, action.userId, false)
                // users: [...state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: false}
                //     }
                //     return u;
                // })]
            }
        case 'users/SET_USERS':
            return {
                ...state,
                users: action.users
            }

        case 'users/CHANGE_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "users/SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case "users/IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }

        case "users/TOGGLE_FOLLOWING_IN_PROGRESS":
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
    return {type: 'users/FOLLOW', userId}
}
export const unFollow = (userId: number): unfollowACPropsType => {
    return {type: 'users/UNFOLLOW', userId}
}

export const setUsers = (users: Array<userPropsType>): setUsersACPropsType => {
    return {type: 'users/SET_USERS', users}
}

export const changeCurrentPage = (currentPage: number): changeCurrentPageType => {
    return {type: 'users/CHANGE_CURRENT_PAGE', currentPage}
}

export const setTotalUsersCount = (totalCount: number): setTotalUsersCountType => {
    return {type: 'users/SET_TOTAL_USERS_COUNT', totalCount}
}

export const toggleIsFetching = (isFetching: boolean): isFetchingACType => {
    return {type: 'users/IS_FETCHING', isFetching}
}

export const toggleFollowingInProgress = (isFetching: boolean, usersId: number): followingInProgressType => {
    return {type: 'users/TOGGLE_FOLLOWING_IN_PROGRESS', isFetching, usersId}
}

export const followUnFollowUsers = async (userId: number, dispatch: Dispatch, apiMethod: any, action: any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(action(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}


export const getUserThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    const response = await usersApi.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const unFollowThunk = (userId: number) => async (dispatch: Dispatch) => {
    await followUnFollowUsers(userId, dispatch, usersApi.unFollowUsers.bind(usersApi), unFollow)
}

export const followThunk = (userId: number) => async (dispatch: Dispatch) => {
    await followUnFollowUsers(userId, dispatch, usersApi.followUsers.bind(usersApi), follow)

}
