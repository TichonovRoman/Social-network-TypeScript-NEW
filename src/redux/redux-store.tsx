import React from "react"
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer, {
    addPostActionCreator, deletePostActionCreator, savePhotoSuccess, setMyStatus,
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
import appReducer, {initializedSuccessAC} from "./app-reducer";

export const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,

})

export type AppStateType = ReturnType<typeof rootReducers>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    // | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof deletePostActionCreator>
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
    | ReturnType<typeof resetAuthDataAC>
    | ReturnType<typeof initializedSuccessAC>
    | ReturnType<typeof savePhotoSuccess>;

export default store