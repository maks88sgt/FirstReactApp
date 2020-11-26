import React from 'react'
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Nav from "./components/Nav/Nav.jsx";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "./Redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
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
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)