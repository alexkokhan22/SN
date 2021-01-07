import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
