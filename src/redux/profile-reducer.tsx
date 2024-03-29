import {PostsDataType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {ProfileInfoType} from "../components/Profile/ProfileInfo/ProfileInfo";

export const ADD_POST = `ADD-POST`
export const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`
export const SET_USER_PROFILE = `SET-USER-PROFILE`
export const GET_MY_STATUS = `GET-MY-STATUS`
export const DELETE_POST = `DELETE-POST`
export const PROFILE_PHOTO_SUCCESS = `PROFILE_PHOTO_SUCCESS`


export type ProfilePageType = {
    posts: Array<PostsDataType>,
    // newPostText: string,
    profile: ProfileInfoType,
    status: string,

}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are yuo?", likesCount: 15},
        {id: 2, message: "It`s my first post", likesCount: 20},
        {id: 3, message: "Hi", likesCount: 56},
        {id: 4, message: "Cool", likesCount: 20},
    ] as Array<PostsDataType>,
    // newPostText: 'it-kamasutra.com' as string,
    profile: {
        "aboutMe": "",
        "contacts": {
            "github": "",
            "vk": "",
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "website": "",
            "youtube": "",
            "mainLink": "",
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": "",
        "fullName": "",
        "userId": 0,
        photos: {
            small: "",
            large: "",
        }
    },
    status: ""

}

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: action.text,
                likesCount: 0,
            }
            const newState = {...state, posts: [...state.posts, newPost]}
            return newState;
        case DELETE_POST:
            return {...state, posts: [...state.posts.filter(p => p.id != action.postId)]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case GET_MY_STATUS:
            return {...state, status: action.status}
        case PROFILE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }


}

export const addPostActionCreator = (text: string) => ({type: ADD_POST, text}) as const
export const deletePostActionCreator = (postId: number) => ({type: DELETE_POST, postId}) as const
export const setUserProfile = (profile: ProfileInfoType) => ({type: SET_USER_PROFILE, profile}) as const
export const setMyStatus = (status: string) => ({type: GET_MY_STATUS, status}) as const
export const savePhotoSuccess = (photos: {
    small: string,
    large: string,
}) => ({type: PROFILE_PHOTO_SUCCESS, photos}) as const


export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))

}

export const setStatus = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setMyStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
   let response = await profileAPI.updateStatus(status);
           if (response.data.resultCode === 0) {
            dispatch(setMyStatus(status))
        }
}
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
       let response = await profileAPI.savePhoto(file);
   let data = response.data
           if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos))
        }
}
export const saveProfile = (profile: any) => async (dispatch: Dispatch) => {
       let response = await profileAPI.saveProfile(profile);
   let data = response.data
           if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos))
        }
}

export default profileReducer;


