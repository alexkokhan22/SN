import {Dispatch} from "redux";
import {headerApi, loginApi} from "../api/api";
import {stopSubmit} from "redux-form";


type setUsersDataType = {
    type: "SET-USERS-DATA"
    data: {
        id: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}


export type actionType = setUsersDataType

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


export const authReducer = (state: authPropsType = initialState, action: actionType) => {
    switch (action.type) {
        case "SET-USERS-DATA": {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

export const setUsersData = (id: number | null, login: string | null, email: string | null,  isAuth: boolean): setUsersDataType => {
    return {type: "SET-USERS-DATA", data: {id, login, email, isAuth}}
}

export const setUsersDataThunk = () => (dispatch: Dispatch) => {
    headerApi.setUsersLogin().then((data) => {
        if(data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setUsersData(id, login, email, true))
        }else {
            const messages = data.messages.length > 0 ? data.messages[1] : 'email or password is wrong'
            dispatch(stopSubmit('login', {_error: messages}))
        }
    })
}

export const setLoginDataThunk = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    loginApi.postUsersLogin(email, password, rememberMe).then((data) => {
        if(data.resultCode === 0) {
            dispatch(setUsersDataThunk())
        }
    })
}

export const removeLoginDataThunk = () => (dispatch: Dispatch<any>) => {
    loginApi.deleteUsersLogin().then((data) => {
        if(data.resultCode === 0) {
            dispatch(setUsersData(null, null, null, false))
        }
    })
}