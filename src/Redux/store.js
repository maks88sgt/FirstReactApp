import {profileReducer} from './profileReducer';
import {dialogsReducer} from "./dialogsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 20},
                {id: 2, post: 'It\'s my first post', likesCount: 11},
                {id: 3, post: 'I finished my first task', likesCount: 5},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Egor'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Maks'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Let\'s go to the circus'},
            ],
            newMessageText: '',
        },
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('Subscriber isn\'t define');
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
}

export const addPostActionCreator = () => ({type: ADD_POST,});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export const updateNewMessageActionCreator = (text) =>({type:UPDATE_NEW_MESSAGE_TEXT, message: text,});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE, });

window.store = store;

export default store;
