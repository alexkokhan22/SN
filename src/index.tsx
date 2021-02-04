import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, newPostTextFunction} from "./redux/state";

let renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} newPostTextFunction={newPostTextFunction}/>
        </React.StrictMode>, document.getElementById('root')
    );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();}

renderApp()
subscribe(renderApp)