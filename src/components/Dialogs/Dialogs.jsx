import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/state";

const Dialogs = (props) => {

    let dialogElements = props.dialogData.dialogs
        .map((dialog)=> <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.dialogData.messages
        .map((mes)=> <Message message = {mes.message}/>)

    let newMessageBody = props.dialogData.newMessageText;

    let NewMessageChange = (event) => {
        let messageBody = event.target.value;
        props.dispatch(updateNewMessageActionCreator(messageBody));
    }

    let sendMessage = () => {
        debugger;
        props.dispatch(sendMessageActionCreator());
    };

    return (
        <div className={classes.dialogs}>
            <div>{dialogElements}</div>
            <div>
                <div className={classes.messages}>{messageElements}</div>
                <textarea
                    placeholder='Enter your message'
                    value = {newMessageBody}
                    onChange = {NewMessageChange}
                ></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    );
};

export default Dialogs;