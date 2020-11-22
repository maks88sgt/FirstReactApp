import React from 'react'
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Nav from "./components/Nav/Nav.jsx";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                                        />}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer
                       />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path = '/users' render={()=> <UsersContainer/>}/>
                <Route path = '/login' render ={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
