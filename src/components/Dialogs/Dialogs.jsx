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

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert (text);
    };

    return (
        <div className={classes.dialogs}>
            <DialogItems dialogData = {props.dialogData}/>
            <div>
                <Messages messageData={props.messageData}/>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    );
};

export default Dialogs;