import {PostsDataType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export const FOLLOW = `FOLLOW`
export const UNFOLLOW = `UNFOLLOW`
export const SET_USERS = `SET-USERS`
export const SET_CURRENT_PAGE = `SET-CURRENT-PAGE`
export const SET_TOTAL_USERS_COUNT = `SET-TOTAL-USERS-COUNT`
export const TOOGLE_IS_FETCHING = `TOOGLE-IS-FETCHING`
export const TOOGLE_IS_FOLLOWING_PROGRESS = `TOOGLE-IS-FOLLOWING-PROGRESS`

export type UsersDataType = {
    id: string,
    photos: {
        small: string,
        large: string
    }
    followed: boolean,
    name: string,
    status: string,
    // location: { city: string, country: string }
}

export type UsersPageType = {
    users: Array<UsersDataType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[],
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {

        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_CURRENT_PAGE:
        case SET_USERS:
        case SET_TOTAL_USERS_COUNT:
        case TOOGLE_IS_FETCHING:
            return {...state, ...action.payload}
        case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }


}

export const followSuccess = (userID: string) => ({type: FOLLOW, userID}) as const
export const unfollowSuccess = (userID: string) => ({type: UNFOLLOW, userID}) as const
export const setUsers = (users: any) => ({type: SET_USERS, payload: {users}}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, payload: {currentPage}}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {totalUsersCount}
}) as const
export const toogleIsFetching = (isFetching: boolean) => ({type: TOOGLE_IS_FETCHING, payload: {isFetching}}) as const
export const toogleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
}) as const


export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toogleIsFetching(true))
        dispatch(setCurrentPage(page))
        let response = await usersAPI.getUsers(page, pageSize);
        dispatch(toogleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))

    }
}

export const follow = (userId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(toogleIsFetching(true))
        dispatch(toogleFollowingProgress(true, userId))
        let response = await usersAPI.follow(userId);
        dispatch(toogleIsFetching(false))
        if (response.resultCode == 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toogleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(toogleIsFetching(true))
        dispatch(toogleFollowingProgress(true, userId))

        let response = await usersAPI.unfollow(userId);
        dispatch(toogleIsFetching(false))

        if (response.resultCode == 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toogleFollowingProgress(false, userId))
    }
}


export default usersReducer;


