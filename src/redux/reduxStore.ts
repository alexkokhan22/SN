import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {usersReducer} from "./usersReducer";



let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
})

export type AppStatePropsType = ReturnType<typeof reducers>


let store = createStore(reducers);


export default store