import {ActionsTypes} from "./redux-store";


export const ADD_MESSAGE = `ADD-MESSAGE`;
export const UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`

export type MessagesDataType = {
    id: string
    message: string
}
export type DialogDataType = {
    id: string
    name: string
    avatar: string
}

export type MessagesPageType = {
    messages: Array<MessagesDataType>,
    dialogs: Array<DialogDataType>,
    newMessageText: string,
}

let initialState = {
    messages: [
        {id: '1', message: "Hi!",},
        {id: '2', message: "How are you doing?",},
        {id: '3', message: "What are you doing?",},
    ],
    dialogs: [
        {id: '1', name: `Dimych`, avatar: `https://vraki.net/sites/default/files/inline/images/30_55.jpg`},
        {
            id: '2',
            name: `Andrey`,
            avatar: `https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg`
        },
        {
            id: '3',
            name: `Sveta`,
            avatar: `https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg`
        },
        {
            id: '4',
            name: `Sasha`,
            avatar: `https://yt3.ggpht.com/ytc/AAUvwng015d5KaGgzodaC6HmRLFwTZi8zmwZnt3onn4o=s900-c-k-c0x00ffffff-no-rj`
        },
        {
            id: '5',
            name: `Victor`,
            avatar: `https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg`
        },
    ],
    newMessageText: '',
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsTypes): MessagesPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesDataType = {
                id: "3433",
                message: state.newMessageText,
            }
            const newState = {...state, messages: [...state.messages, newMessage], newMessageText: ''}
            return newState
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.newText}


        default:
            return state
    }


}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}) as const

export const updateNewMessageTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
}) as const


export default dialogsReducer