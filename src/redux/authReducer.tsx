import {Dispatch} from "redux";
import {headerApi} from "../api/api";


type setUsersDataType = {
    type: "SET-USERS-DATA"
    data: {
        id: number | null
        login: string | null
        email: string | null
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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setUsersData = (id: number, login: string, email: string): setUsersDataType => {
    return {type: "SET-USERS-DATA", data: {id, login, email}}
}

export const setUsersDataThunk = () => (dispatch: Dispatch) => {
    headerApi.setUsersLogin().then((data) => {
        if(data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setUsersData(id, login, email))
        }
    })
}