import {PostsDataType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";

export const FOLLOW = `FOLLOW`
export const UNFOLLOW = `UNFOLLOW`
export const SET_USERS = `SET-USERS`

export type UsersDataType = {
    id: string,
    photo: string
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }
}

export type UsersPageType = {
    users: Array<UsersDataType>,
}

let initialState: UsersPageType = {
    users: [],
}

const usersReducer = (state = initialState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return  {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}

        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }


}

export const followAC = (userID: string) => ({type: FOLLOW, userID}) as const
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID}) as const
export const setUsersAC = (users: any) => ({type: SET_USERS, users}) as const

export default usersReducer;


