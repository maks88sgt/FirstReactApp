import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utilites/validators";
import {Textarea} from "../common/FormsControl/FormsControls";

let maxLenght = maxLengthCreator(15);

const AddMessageForm =(props)=>{
    return (<form onSubmit = {props.handleSubmit}>
        <div>
            <Field placeholder={'Enter your message'}
                   component={Textarea}
                   name = {'newMessageBody'}
                   validate = {[maxLenght, required]}
            />
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>);
}

const AddMessageReduxForm = reduxForm ({form: 'dialogAddMessageForm'}) (AddMessageForm);

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs
        .map((dialog)=> <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.dialogsPage.messages
        .map((mes)=> <Message message = {mes.message}/>)


    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    };

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div>{dialogElements}</div>
            <div>
                <div className={classes.messages}>{messageElements}</div>
                <AddMessageReduxForm onSubmit ={addNewMessage}/>
            </div>

        </div>
    );
};

export default Dialogs;