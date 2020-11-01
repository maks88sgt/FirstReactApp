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
                           dialogData={props.appState.dialogsPage}
                           dispatch = {props.dispatch}
                           />}/>
                <Route path='/profile'
                       render={() => <Profile
                           postsData = {props.appState.profilePage}
                           dispatch = {props.dispatch}
                       />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
