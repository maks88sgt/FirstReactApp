import React from 'react'
import './App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    debugger;
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                           store = {props.store}
                           />}/>
                <Route path='/profile'
                       render={() => <Profile
                           store = {props.store}
                       />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
