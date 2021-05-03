import {AppStatePropsType} from "../reduxStore";
import {createSelector} from "reselect";


//reselect библиотека, позволяющая работать с селекторами, дабы не был частый рендеринг, а только для зависимостей


export const getUsers = (state: AppStatePropsType) => {
    return state.users.users
}

//reselect создан для работы с сложной логикой

const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter((u) => u)
})

export const getPageSize = (state: AppStatePropsType) => {
    return state.users.pageSize
}

export const getTotalUsersCount = (state: AppStatePropsType) => {
    return state.users.totalUsersCount
}

export const getCurrentPage = (state: AppStatePropsType) => {
    return state.users.currentPage
}

export const getIsFetching = (state: AppStatePropsType) => {
    return state.users.isFetching
}

export const getFollowingInProgress = (state: AppStatePropsType) => {
    return state.users.followingInProgress
}

export const getIsAuth = (state: AppStatePropsType) => {
    return state.auth.isAuth
}