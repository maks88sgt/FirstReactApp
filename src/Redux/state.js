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
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber () {
        console.log ('Subscriber isn\'t define');
    },

    dispatch (action) {
        if (action.type === ADD_POST)
        {
            let newPost = {
                id: 4,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.message;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push({id:4, message: newMessage});
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST,});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});
export const updateNewMessageActionCreator = (text) =>({type:UPDATE_NEW_MESSAGE_TEXT, message: text,});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE, });

export default store;
window.store = store;