import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs
        .map((dialog)=> <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.dialogsPage.messages
        .map((mes)=> <Message message = {mes.message}/>)

    let newMessageBody = props.dialogsPage.newMessageText;

    let onNewMessageChange = (event) => {
        let messageBody = event.target.value;
        props.updateNewMessageBody(messageBody);
    }

    let sendMessage = () => {
        props.sendMessage();
    };
    debugger;
    return (
        <div className={classes.dialogs}>
            <div>{dialogElements}</div>
            <div>
                <div className={classes.messages}>{messageElements}</div>
                <textarea
                    placeholder='Enter your message'
                    value = {newMessageBody}
                    onChange = {onNewMessageChange}
                ></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    );
};

export default Dialogs;