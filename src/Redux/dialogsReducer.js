const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    };

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 4, message: newMessage});
            return state;
        default:
            return state;
    }
};

export const updateNewMessageActionCreator = (text) =>({type:UPDATE_NEW_MESSAGE_TEXT, message: text,});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE, });
