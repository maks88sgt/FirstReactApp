import React from 'react';
import classes from './Nav.module.css';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <Link to='/profile' activeClassName ={classes.active} >Profile</Link>
            </div>
            <div className={classes.item}>
                <Link to = '/dialogs' activeClassName ={classes.active}> Dialogs</Link>
            </div>
            <div className={classes.item}>
                <Link to = '/news' activeClassName ={classes.active}>News</Link>
            </div>
            <div className={classes.item}>
                <Link to = '/settings' activeClassName ={classes.active}>Settings</Link>
            </div>
        </nav>
    );
};

export default Nav;