const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {name: "Andrew", id: 1},
        {name: "Dmirty", id: 2},
        {name: "Sasha", id: 3},
        {name: "Sveta", id: 4},

    ],
    messages: [
        {message: "I am normal popover and i can have text and everything", id: 1},
        {message: "I am normal popover", id: 2},
        {message: "it", id: 3},
        {message: "y oooooooo", id: 4},
        {message: "yoooodddoooo", id: 5},
    ],

};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {message: body, id: 6}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>
    ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;