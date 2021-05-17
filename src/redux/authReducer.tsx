import {Dispatch} from 'redux';
import {headerApi, loginApi} from '../api/api';
import {stopSubmit} from 'redux-form';
import {ThunkAction} from 'redux-thunk';
import {AppStateActionType, AppStatePropsType} from './reduxStore';

type setUsersDataType = {
    type: 'auth/SET-USERS-DATA'
    data: {
        id: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}

export type actionAuthUsersType = setUsersDataType

export type authPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState: authPropsType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


export const authReducer = (state: authPropsType = initialState, action: actionAuthUsersType) => {
    switch (action.type) {
        case 'auth/SET-USERS-DATA': {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

export const setUsersData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setUsersDataType => {
    return {type: 'auth/SET-USERS-DATA', data: {id, login, email, isAuth}}
}

export const setUsersDataThunk = () => async (dispatch: Dispatch) => {
    const response = await headerApi.setUsersLogin()
        if (response.resultCode === 0) {
            let {id, login, email} = response.data
            dispatch(setUsersData(id, login, email, true))
        }
}

export const setLoginDataThunk = (email: string, password: string, rememberMe: boolean)
    : ThunkAction<void, AppStatePropsType, unknown, AppStateActionType> =>
    async (dispatch) => {
        const response = await loginApi.postUsersLogin(email, password, rememberMe)
        if (response.resultCode === 0) {
            await dispatch(setUsersDataThunk())
        }

        const messages = response.messages.length > 0 ? response.messages[0] : 'email or password is wrong'
        dispatch(stopSubmit('login', {_error: messages}))
}

export const removeLoginDataThunk = () =>  async  (dispatch: Dispatch) => {
    const response = await loginApi.deleteUsersLogin()
        if (response.resultCode === 0) {
            dispatch(setUsersData(null, null, null, false))
        }
}