import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={sendMessage}
            dialogsPage = {state}
        />
    );
};

export default DialogsContainer;