import React, {useRef} from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesDataType, DialogDataType} from "../../redux/state";

type DialogsPropsType = {
    messages: Array<MessagesDataType>
    dialogs: Array<DialogDataType>
    updateNewMessageText: (text: string) => void
    addMessage: () => void
    newMessageText: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(m => <DialogItem name={m.name} id={m.id} avatar={m.avatar}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)


    let newMessageElement: any = useRef()

    let addMessage = () => {
        props.addMessage()
    }


    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
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

                />
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>


        </div>
    );
};

export default Dialogs;