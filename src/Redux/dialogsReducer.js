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
    let stateCopy =  {
        ...state,
        //messages: [...state.messages],
    };
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.message;
            return stateCopy;
        case SEND_MESSAGE:
            let newMessage = stateCopy.newMessageText;
            stateCopy.newMessageText = '';
            stateCopy.messages.push({id: 4, message: newMessage});
            return stateCopy;
        default:
            return state;
    }
};

export const updateNewMessageActionCreator = (text) =>({type:UPDATE_NEW_MESSAGE_TEXT, message: text,});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE, });
