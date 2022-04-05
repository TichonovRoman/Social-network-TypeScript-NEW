import React from "react"
import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {
    addPostActionCreator, setMyStatus,
    setStatus,
    setUserProfile,

} from "./profile-reducer";
import dialogsReducer, {addMessageActionCreator} from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer, {
    followSuccess ,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toogleFollowingProgress, toogleIsFetching,
    unfollowSuccess
} from "./users-reducer";
import authReducer, {resetAuthDataAC, setAuthUserData} from "./auth-reducer";


import thunkMiddleware from "redux-thunk"

export const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,

})

export type AppStateType = ReturnType<typeof rootReducers>

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))


export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    // | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    // | ReturnType<typeof updateNewMessageTextActionCreator>
    | ReturnType<typeof followSuccess >
    | ReturnType<typeof unfollowSuccess >
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toogleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toogleFollowingProgress>
    | ReturnType<typeof setMyStatus>
    | ReturnType<typeof resetAuthDataAC>;




export default store