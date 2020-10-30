import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"

const DialogItems = () => {
    let  dialogData = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Maks'},
    ];

    let dialogElements = dialogData
        .map((dialog)=> <DialogItem id={dialog.id} name={dialog.name}/>);

    return (
        <div>
            {dialogElements}
        </div>
    );
};

const Messages = () => {
    let  messageData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Let\'s go to the cinema'},
    ];

    let messageElements = messageData
        .map((mes)=> <Message message = {mes.message}/>)

    return (
        <div className={classes.messages}>
            {messageElements}
        </div>
    );
};



const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <DialogItems/>
            <Messages/>
        </div>
    );
};

export default Dialogs;