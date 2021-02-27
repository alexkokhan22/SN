import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import Music from "./component/Music/music";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import { Route } from 'react-router-dom';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import UsersContainer from "./component/Users/UsersContainer";




const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Nav/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>

        </div>
    );
}

export default App;
