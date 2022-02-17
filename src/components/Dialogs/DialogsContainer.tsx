import React, {ChangeEvent, MutableRefObject, useRef} from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    MessagesDataType,
    DialogDataType,
    ActionsTypes,
   } from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    messages: Array<MessagesDataType>
    dialogs: Array<DialogDataType>
    // updateNewMessageText: (text: string) => void
    // addMessage: () => void
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    let addMessage = () => {
        let action = addMessageActionCreator()
        props.dispatch(action)
    }


    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
       }


    return (
        <Dialogs messages={props.messages}
                 dialogs={props.dialogs}
                 onMessageChange={onMessageChange}
                 addMessage = {addMessage}
                 newMessageText = {props.newMessageText}


/>
    );
};

export default DialogsContainer;