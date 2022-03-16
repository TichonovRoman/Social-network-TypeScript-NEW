import React from "react"
import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {addMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer, {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toogleIsFetching,
    unfollow
} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";

export const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducers>

let store = createStore(rootReducers)

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toogleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>;




export default store