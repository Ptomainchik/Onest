import { FormAction, stopSubmit } from "redux-form";
import { profileAPI} from "../api/ProfileApi";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { v1 } from "uuid";


let initialState = {
    posts: [
        {id: v1(), message:"Hi, how are you?", likesCount: 13},
        {id: v1(), message:"It's my first post", likesCount: 32}] as Array<PostType>,
     profile: null as ProfileType | null,
     status: "" ,
     newPostText: ""
    }

    

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
      switch (action.type) {
         case "SN/PROFILE/ADD-POST":{
          let newPost = {
            id: v1(),
            message: action.newPostText,
            likesCount: 0,
          };
          return {
            ...state,
            posts: [...state.posts, newPost]
          };
        } 
        case "SN/PPOFILE/ADD-LIKES":{
            return {...state, posts: state.posts.map(el => el.id === action.id ? {...el, likesCount: action.likes} : el)}
        }
        case "SN/PROFILE/SET-STATUS":{
          return { 
            ...state,
          status: action.status};
        }
        case "SN//PROFILE/SET-USER-PROFILE": {
          return {
            ...state, profile: action.profile};
        }
        case "SN/PROFILE/SAVE-PHOTO-SUCCESS": 
          return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
        
        default:
          return state;
}
}

export const actions = {
  addPostActionCreator: (newPostText: string) => ({type: "SN/PROFILE/ADD-POST", newPostText} as const),

  addLikes: (likes: number, id: string) => ({type: "SN/PPOFILE/ADD-LIKES",id, likes} as const),

  setUserProfile: (profile: ProfileType) =>  ({type: "SN//PROFILE/SET-USER-PROFILE", profile} as const),

  setStatus: (status: string) => ({type: "SN/PROFILE/SET-STATUS", status} as const),
  
  savePhotoSuccess: (photos: PhotosType) => ({type: "SN/PROFILE/SAVE-PHOTO-SUCCESS", photos} as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getProfile(userId)
  dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0){
    dispatch(actions.setStatus(status))}}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0){
    dispatch(actions.savePhotoSuccess(data.data.photos))}}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;   
  const data = await profileAPI.saveProfile(profile)
        if (data.resultCode === 0){
          if (userId != null){
        dispatch(getUserProfile(userId))}
       else {
        throw new Error("userId can't be null")
      }}
      else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]} ))
      return Promise.reject(data.messages[0])
}}  


export default profileReducer; 

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

export type ProfileReducerType = {
  posts: Array<PostType>
  profile:  ProfileType
  status: string
  newPostText: string
}