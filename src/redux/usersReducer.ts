/*export type locationPropsType = {
    country: string
    city: string
}*/

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

export type ActionUsersPropsType = followACPropsType
    | unfollowACPropsType
    | setUsersACPropsType
    | changeCurrentPageType
    | setTotalUsersCountType


export let initialState: UsersPropsType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state = initialState, action: ActionUsersPropsType): UsersPropsType => {
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
        default:
            return state
    }
}

export const followAC = (userId: number): followACPropsType => {
    return {type: 'FOLLOW', userId}
}
export const unfollowAC = (userId: number): unfollowACPropsType => {
    return {type: 'UNFOLLOW', userId}
}

export const setUsersAC = (users: Array<userPropsType>): setUsersACPropsType => {
    return {type: 'SET_USERS', users}
}

export const changeCurrentPageAC = (currentPage: number): changeCurrentPageType => {
    return {type: 'CHANGE_CURRENT_PAGE', currentPage}
}

export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountType => {
    return {type: 'SET_TOTAL_USERS_COUNT', totalCount}
}

