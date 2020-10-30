import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props)=>{
    return (
        <div className = {classes.dialog}>
            <NavLink to={'./dialogs/'+ props.id} > {props.name} </NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div>
                <DialogItem name = 'Dmitry' id ='1'/>
                <DialogItem name = 'Andrey' id ='2'/>
                <DialogItem name = 'Maks' id ='3'/>
            </div>
            <div className={classes.messages}>
                <Message message = 'Hi!'></Message>
                <Message message = 'How are you?'></Message>
                <Message message = "Let's go to the cinema"></Message>

            </div>
        </div>
    );
};

export default Dialogs;