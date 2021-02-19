import {combineReducers, createStore} from "redux";
import profileReducer, { profilePropsType } from "./profileReducer";
import dialogsReducer, { dialogsPropsType } from "./dialogsReducer";

export type StatePropsType = {
    profile: profilePropsType
    dialogs: dialogsPropsType
}

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
})


let store = createStore(reducers);


export default store