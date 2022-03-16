import {PostsDataType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";

export const SET_USER_DATA = `SET-USER-DATA`




export type AuthDataType = {
    email: string | null,
    id: number | null,
    login: string | null,
    isAuth: boolean,
}

let initialState: AuthDataType= {
    email: null,
    id: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initialState, action: ActionsTypes): AuthDataType => {

    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return  {...state, ...action.data, isAuth: true}


        default:
            return state
    }


}

export const setAuthUserData = (data: AuthDataType ) => ({type: SET_USER_DATA, data}) as const


export default authReducer;


