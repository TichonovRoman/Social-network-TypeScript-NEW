import {ActionsTypes} from "./store";


type FriendsDataType = {
    id: number,
    name: string,
    avatar: string
}

let initialState: Array<FriendsDataType> = [
    {id: 1, name: `Dimych`, avatar: `https://vraki.net/sites/default/files/inline/images/30_55.jpg`},
    {
        id: 2,
        name: `Andrey`,
        avatar: `https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg`
    },
    {id: 3, name: `Sveta`, avatar: `https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg`},

]

const friendsReducer = (state = initialState, action: ActionsTypes) => {


    return state
}

export default friendsReducer