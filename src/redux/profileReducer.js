import { profileAPI, usersAPI } from "../api/Api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";

let initialState = {
    posts: [
        {id: 1, message:"Hi, how are you?", likesCount: "13"},
        {id: 2, message:"It's my first post", likesCount: "32"}],
     profile: null,
     status: ""   
    }

    const profileReducer = (state = initialState, action) => {
      switch (action.type) {
         case ADD_POST:{
          let newPost = {
            id: 3,
            message: action.newPostText,
            likesCount: 0
          };
          return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ""};
        }
        case SET_STATUS:{
          return { 
            ...state,
          status: action.status};
        }
        case SET_USER_PROFILE: {
          return {
            ...state, profile: action.profile};
        }
        case DELETE_POST: 
          return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        
        case SAVE_PHOTO_SUCCESS: 
          return {...state, profile: {...state.profile, photos: action.photos}};
        
        default:
          return state;
      }}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (profile) =>  ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0){
    dispatch(setStatus(status))}};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0){
    dispatch(savePhotoSuccess(response.data.data.photos))}};

export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export default profileReducer; 


