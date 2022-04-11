
import {ActionsTypes, AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";

export const INITIALIZED_SUCCESS = `INITIALIZED_SUCCESS`

export type AppDataType = {
    initialized: boolean
}


let initialState: AppDataType = {
    initialized: false,
   }

const appReducer = (state = initialState, action: ActionsTypes): AppDataType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}



        default:
            return state
    }


}

export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS}) as const


export const initializeApp = (): ThunkAction<any, AppStateType, any, ActionsTypes> => (dispatch) => {
    let promis = dispatch(getAuthUserData())
    promis.then(() => {
        dispatch(initializedSuccessAC())
    })


}



export default appReducer;


