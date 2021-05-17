import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer, {actionDialogsType} from './dialogsReducer';
import profileReducer, {actionProfileType} from './profileReducer';
import {actionUsersType, usersReducer} from './usersReducer';
import {actionAuthUsersType, authReducer} from './authReducer';
import  thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer, { actionAppType } from './appReducer';



let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export type AppStatePropsType = ReturnType<typeof reducers>
export type AppStateActionType = actionAppType   | actionAuthUsersType | actionDialogsType | actionProfileType | actionUsersType

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store