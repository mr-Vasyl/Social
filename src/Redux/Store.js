import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sideBarReducer from "./SideBarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { message: "Hi, how are you?", id: 1, likesCount: 12 },
                { message: "It is my first post!", id: 2, likesCount: 24 },
            ],
            newPostText: "",
        },
        dialogsPage: {
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
        },
        sideBar: {
            peopleList: [
                { name: "Andrew", id: 1 },
                { name: "Dmirty", id: 2 },
                { name: "Sasha", id: 3 },
                { name: "Sveta", id: 4 },

            ]
        }
    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store