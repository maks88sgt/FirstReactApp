import React from 'react'
import './App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Nav/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' component={Dialogs}/>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/news' component={News}/>
                  <Route path='/Settings' component={Settings}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
