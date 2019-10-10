const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [
        {
            fullName: "Andrew",
            followed: false,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMI9_Ux0mV1bRj5BvM-NoAJqn47xxvYSovCu8e4neAy8n13Q6uA',
            id: 1,
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            fullName: "Sasha",
            followed: true,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMI9_Ux0mV1bRj5BvM-NoAJqn47xxvYSovCu8e4neAy8n13Q6uA',
            id: 1,
            status: 'I am a doctor',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            fullName: "Ivan",
            followed: false,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMI9_Ux0mV1bRj5BvM-NoAJqn47xxvYSovCu8e4neAy8n13Q6uA',
            id: 1,
            status: 'I am a student',
            location: {city: 'Warszawa', country: 'Poland'}
        },
    ],
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}
export const followAC = (userId) =>
    ({type: FOLLOW, userId});
export const unFollowAC = (userId) =>
    ({type: UNFOLLOW, userId});
export const setUsersAC = (users) =>
    ({type: SET_USERS, users});

export default UsersReducer;