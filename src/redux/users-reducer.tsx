import {PostsDataType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";

export const FOLLOW = `FOLLOW`
export const UNFOLLOW = `UNFOLLOW`
export const SET_USERS = `SET-USERS`
export const SET_CURRENT_PAGE = `SET-CURRENT-PAGE`
export const SET_TOTAL_USERS_COUNT = `SET-TOTAL-USERS-COUNT`

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
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer = (state = initialState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return  {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}

        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}

        default:
            return state
    }


}

export const followAC = (userID: string) => ({type: FOLLOW, userID}) as const
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID}) as const
export const setUsersAC = (users: any) => ({type: SET_USERS, users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const

export default usersReducer;


