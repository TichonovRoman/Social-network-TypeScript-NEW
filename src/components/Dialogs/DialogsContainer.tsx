import React, {ChangeEvent, MutableRefObject, useRef} from 'react';
import {
    addMessageActionCreator,
    MessagesPageType,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


// type DialogsPropsType = {
//     messages: Array<MessagesDataType>
//     dialogs: Array<DialogDataType>
//     // updateNewMessageText: (text: string) => void
//     // addMessage: () => void
//     newMessageText: string
//     dispatch: (action: ActionsTypes) => void
// }

type MapStatePropsType = {
    dialogsPage: MessagesPageType
}

type MapDispatchToPropsType = {
    onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let text = e.currentTarget.value
            let action = updateNewMessageTextActionCreator(text)
            dispatch(action)
        },
        addMessage: () => dispatch(addMessageActionCreator())

    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;