export type locationPropsType = {
    country: string
    city: string
}


export type userPropsType = {
    id: number
    photo: string
    followed: boolean
    fullName: string
    status: string
    location: locationPropsType
}

export type UsersPropsType = {
    users: Array<userPropsType>
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

export type ActionUsersPropsType = followACPropsType | unfollowACPropsType | setUsersACPropsType



export let initialState: UsersPropsType = {
    users: []
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
                users: [...state.users, ...action.users]
            }
        default: return state
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

