import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./Redux/state";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./Redux/state";

 let rerenderEntireTree = (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state}
                     addPost={addPost}
                     updateNewPostText = {updateNewPostText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree();
subscribe (rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
