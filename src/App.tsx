import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import Music from "./component/Music/music";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import { Route } from 'react-router-dom';
import {actionType} from "./redux/profileReducer";
import {StatePropsType} from "./redux/reduxStore";
import DialogsContainer from './component/Dialogs/DialogsContainer';



export type AppPropsType = {
    state: StatePropsType
    dispatch: (action: actionType) => void
}


const App = (props: AppPropsType) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Nav/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'}
                       render={() =>
                           <DialogsContainer
                               state={props.state}
                               dispatch={props.dispatch}
                           />}/>
                <Route path={'/profile'} render={() =>
                    <Profile state={props.state}
                             dispatch={props.dispatch}

                    />}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>

        </div>
    );
}

export default App;
