const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
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

}