const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {name: "Zlatko Dragovich", id: 1},
        {name: "Grigory Vlasov", id: 2},
        {name: "Aleks Fursovich", id: 3},
        {name: "Varg Vikernes", id: 4},
    ],
    messages: [
        {message: "I'm glad we're friends for so many reasons. ....", id: 1},
        {message: "I'm so lucky to have a friend like you. ...", id: 2},
        {message: "I appreciate so many things about you-especially…", id: 3},
        {message: "I'm glad we're friends for so many reasons. ...", id: 4},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {message: body, id: 5}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>
    ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;