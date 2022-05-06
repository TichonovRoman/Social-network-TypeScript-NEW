import {PostsDataType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {initialValuesType} from "../components/Login/Login";
import {setStatus} from "./profile-reducer";

export const SET_USER_DATA = `social-network/auth/SET-USER-DATA`
export const RESET_USER_AUTH_DATA = `social-network/auth/RESET-USER-AUTH-DATA`


export type AuthDataType = {
    email: string | null,
    id: number | null,
    login: string | null,
    isAuth: boolean,
}

let initialState: AuthDataType = {
    email: null,
    id: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initialState, action: ActionsTypes): AuthDataType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case RESET_USER_AUTH_DATA:
            return {
                ...state,
                ...initialState
            }


        default:
            return state
    }


}

export const setAuthUserData = (data: AuthDataType) => ({type: SET_USER_DATA, data}) as const
export const resetAuthDataAC = () => ({type: RESET_USER_AUTH_DATA}) as const

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data))
    }


    // .catch(() => alert("Most likely you are not logged in"))
}

export const login = (values: initialValuesType, setStatus: (status?: any) => void) => async (dispatch: Dispatch) => {

    let response = await authAPI.login(values);
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data))
    } else {
        setStatus(response.data.messages)
    }
    // .catch(() => alert("Most likely you are not logged in"))
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(resetAuthDataAC())
    }
    // .catch(() => alert("Most likely you are not logged in"))
}


export default authReducer;


