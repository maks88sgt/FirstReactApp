import React from 'react'
import './App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           dialogData={props.appState.profilePage.dialogs}
                           messageData={props.appState.messagesPage.messages}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           postsData={props.appState.profilePage.posts}
                           addPost={props.addPost}
                           newPostText = {props.appState.profilePage.newPostText}
                           updateNewPostText = {props.updateNewPostText}
                       />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
