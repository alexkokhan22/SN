import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Nav from "./component/Nav";
import Profile from "./component/Profile";

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
