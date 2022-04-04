import React, {ChangeEvent} from 'react';
import {
    addMessageActionCreator,
    MessagesPageType,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";


// type DialogsPropsType = {
//     messages: Array<MessagesDataType>
//     dialogs: Array<DialogDataType>
//     // updateNewMessageText: (text: string) => void
//     // addMessage: () => void
//     newMessageText: string
//     dispatch: (action: ActionsTypes) => void
// }

type MapStatePropsType = {
    dialogsPage: MessagesPageType,
    // isAuth: boolean
}

type MapDispatchToPropsType = {
    // onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addMessage: (text:string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,

    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        // onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
        //     let text = e.currentTarget.value
        //     let action = updateNewMessageTextActionCreator(text)
        //     dispatch(action)
        // },
        addMessage: (text) => dispatch(addMessageActionCreator(text))

    }
}





export default compose<React.ComponentType>( //позволяет последовательно вызывать функции по очереди для Dialogs
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)