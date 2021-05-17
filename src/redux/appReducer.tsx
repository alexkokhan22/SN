import {ThunkAction} from 'redux-thunk';
import {setUsersDataThunk} from './authReducer';
import {AppStateActionType, AppStatePropsType} from './reduxStore';


export type AppReducerPropsType = {
    initialized: boolean
}

let initialState: AppReducerPropsType = {
    initialized: false
}

export type actionAppType = ReturnType<typeof setInitialized>

const appReducer = (state: AppReducerPropsType = initialState, action: actionAppType) => {
    switch (action.type) {
        case 'app/SET-INITIALIZED': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const setInitialized = () => {
    return {type: 'app/SET-INITIALIZED'}
}

export const initializeAppTC = ():
    ThunkAction<void, AppStatePropsType, unknown, AppStateActionType> =>
    async (dispatch) => {
        const promise = dispatch(setUsersDataThunk())
        await Promise.all([promise])
        dispatch(setInitialized())
        /*let promise = dispatch(setUsersDataThunk())
        Promise.all([promise]).then(() => {
            dispatch(setInitialized())
        })*/
    }

export default appReducer;

