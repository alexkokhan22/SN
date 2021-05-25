import {Dispatch} from 'redux';
import {headerApi, loginApi, securityApi} from '../api/api';
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
        captcha: string | null
    }
}

type getCaptchaType = ReturnType<typeof getCaptcha>

export type actionAuthUsersType = setUsersDataType | getCaptchaType

export type authPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captcha: string | null
}

let initialState: authPropsType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
}


export const authReducer = (state: authPropsType = initialState, action: actionAuthUsersType) => {
    switch (action.type) {
        case 'auth/SET-USERS-DATA':
        case "auth/GET-CAPTCHA": {
            return {
                ...state,
                ...action.data
            }
        }

        default:
            return state;
    }
}

export const setUsersData = (id: number | null, login: string | null, email: string | null, isAuth: boolean, captcha: string | null): setUsersDataType => {
    return {type: 'auth/SET-USERS-DATA', data: {id, login, email, isAuth, captcha}}
}

export const getCaptcha = (captchaUrl: string) => {
    return {type: 'auth/GET-CAPTCHA', data: {captcha: captchaUrl}}as const
}

export const setUsersDataThunk = () => async (dispatch: Dispatch) => {
    const response = await headerApi.setUsersLogin()
    if (response.resultCode === 0) {
        let {id, login, email, captcha} = response.data
        dispatch(setUsersData(id, login, email, true, captcha))
    }
}

export const setLoginDataThunk = (email: string, password: string, rememberMe: boolean, captcha: string)
    : ThunkAction<void, AppStatePropsType, unknown, AppStateActionType> =>
    async (dispatch) => {
        const response = await loginApi.postUsersLogin(email, password, rememberMe, captcha)
        if (response.resultCode === 0) {
            await dispatch(setUsersDataThunk())
        }else {
            if (response.resultCode === 10) {
                return dispatch(getCaptchaTC())
            }
            const messages = response.messages.length > 0 ? response.messages[0] : 'email or password is wrong'
            dispatch(stopSubmit('login', {_error: messages}))
        }
    }

export const removeLoginDataThunk = () => async (dispatch: Dispatch) => {
    const response = await loginApi.deleteUsersLogin()
    if (response.resultCode === 0) {
        dispatch(setUsersData(null, null, null, false, null))
    }
}

export const getCaptchaTC = () => async (dispatch: Dispatch) => {
    const response = await securityApi.captcha()
    const captchaUrl = response.data.url
    dispatch(getCaptcha(captchaUrl))
}