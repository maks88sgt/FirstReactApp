import {usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 20},
        {id: 2, post: 'It\'s my first post', likesCount: 11},
        {id: 3, post: 'I finished my first task', likesCount: 5},
    ],
    newPostText: '',
    profile: null,
};


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: state.newPostText, likesCount: 0},],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST,});
export const updateNewPost = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});
export const setUserProfile =(profile) => ({type:SET_USER_PROFILE, profile: profile });
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then (response => {
        dispatch(setUserProfile(response.data));
    });
};
