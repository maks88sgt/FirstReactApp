import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"

const DialogItems = (props) => {

    let dialogElements = props.dialogData
        .map((dialog)=> <DialogItem id={dialog.id} name={dialog.name}/>);

    return (
        <div>
            {dialogElements}
        </div>
    );
};

const Messages = (props) => {

    let messageElements = props.messageData
        .map((mes)=> <Message message = {mes.message}/>)

    return (
        <div className={classes.messages}>
            {messageElements}
        </div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <DialogItems dialogData = {props.dialogData}/>
            <Messages messageData = {props.messageData}/>
        </div>
    );
};

export default Dialogs;