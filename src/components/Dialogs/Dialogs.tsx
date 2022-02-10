import React, {MutableRefObject, useRef} from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    MessagesDataType,
    DialogDataType,
    ActionsTypes,
    updateNewPostTextActionCreator,
    updateNewMessageTextActionCreator, addMessageActionCreator
} from "../../redux/state";

type DialogsPropsType = {
    messages: Array<MessagesDataType>
    dialogs: Array<DialogDataType>
    // updateNewMessageText: (text: string) => void
    // addMessage: () => void
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(m => <DialogItem name={m.name} id={m.id} avatar={m.avatar}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)


    let newMessageElement: any  = useRef()

    let addMessage = () => {
        let action = addMessageActionCreator()
        props.dispatch(action)
    }


    let onMessageChange = () => {
        let text = newMessageElement.current.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
       }


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
                <textarea ref={newMessageElement}
                          onChange={onMessageChange}
                          value={props.newMessageText}
                          placeholder={"Enter your message"}

                />
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>


        </div>
    );
};

export default Dialogs;