import {ActionsTypes, MessagesDataType, MessagesPageType} from "./state";


const ADD_MESSAGE = `ADD-MESSAGE`;
const UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`


const dialogsReducer = (state: MessagesPageType, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesDataType = {
                id: "3433",
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
        default: return state
    }



}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}) as const

export const updateNewMessageTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
}) as const



export default dialogsReducer