const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT){
        state.newMessageText = action.message;
    } else if (action.type === SEND_MESSAGE) {
        let newMessage = state.newMessageText;
        state.newMessageText = '';
        state.messages.push({id:4, message: newMessage});
    }
    return state;
}