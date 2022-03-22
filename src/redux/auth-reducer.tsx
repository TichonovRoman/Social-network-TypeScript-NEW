import {PostsDataType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

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

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me().then(response => {

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data))
        }

    })
        .catch(() => alert("Most likely you are not logged in"))
}


export default authReducer;


