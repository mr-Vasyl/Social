 const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        { name: "Andrew", id: 1 },
        { name: "Dmirty", id: 2 },
        { name: "Sasha", id: 3 },
        { name: "Sveta", id: 4 },

    ],
    messages: [
        { message: "I am normal popover and i can have text and everything", id: 1 },
        { message: "I am normal popover", id: 2 },
        { message: "it", id: 3 },
        { message: "y oooooooo", id: 4 },
        { message: "yoooodddoooo", id: 5 },
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ message: body, id: 6 });
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () =>
    ({ type: SEND_MESSAGE });
export const updadeNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;