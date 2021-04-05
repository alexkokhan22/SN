import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import  thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"



let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStatePropsType = ReturnType<typeof reducers>


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store