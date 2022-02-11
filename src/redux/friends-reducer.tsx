import {ActionsTypes} from "./state";


type FriendsDataType = {
    id: number,
    name: string,
    avatar: string
}
const friendsReducer = (state: Array<FriendsDataType>, action: ActionsTypes) => {


    return state
}

export default friendsReducer