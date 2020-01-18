import {profileAPI, usersAPI} from "../Api/Api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {message: "Hi, how are you?", id: 1, likesCount: 12},
        {message: "It is my first post!", id: 2, likesCount: 24},
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) =>
    ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) =>
    ({type: SET_STATUS, status});


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export default profileReducer;