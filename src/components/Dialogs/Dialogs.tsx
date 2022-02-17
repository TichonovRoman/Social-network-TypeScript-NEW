import React, {MutableRefObject, useRef} from 'react';
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

type DialogsPropsType = {
    messages: Array<MessagesDataType>
    dialogs: Array<DialogDataType>
    // updateNewMessageText: (text: string) => void
    // addMessage: () => void
    newMessageText: string
    onMessageChange: (newMessageElement: any) => void
    addMessage: () => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElements = props.dialogs.map(m => <DialogItem key={m.id} name={m.name} id={m.id} avatar={m.avatar}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

      return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={s.active}>
                    <DialogItem name={props.dialogs[0].name} id={props.dialogs[0].id} avatar={props.dialogs[0].avatar}/>
                </div>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <textarea
                          onChange={props.onMessageChange}
                          value={props.newMessageText}
                          placeholder={"Enter your message"}

                />
                <div>
                    <button onClick={props.addMessage}>Add message</button>
                </div>

            </div>


        </div>
    );
};

export default Dialogs;