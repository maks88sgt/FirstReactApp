const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 20},
                {id: 2, post: 'It\'s my first post', likesCount: 11},
                {id: 3, post: 'I finished my first task', likesCount: 5},
            ],
            dialogs: [
                {id: 1, name: 'Egor'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Maks'},
            ],
            newPostText: '',
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Let\'s go to the circus'},
            ],
        },
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this.rerenderEntireTree = observer;
    },
    rerenderEntireTree () {
        console.log ('State is changed')
    },

    dispatch (action) {
        if (action.type === 'ADD-POST')
        {
            let newPost = {
                id: 4,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this.rerenderEntireTree(this._state);
        }

    }
};

export const addPostActionCreator = () => ({type: ADD_POST,});

export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export default store;
window.store = store;