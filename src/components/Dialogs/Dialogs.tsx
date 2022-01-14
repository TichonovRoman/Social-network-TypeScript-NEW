import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogDataType = {
    id: string
    name: string
}
type MessagesDataType = {
    id: string
    message: string
}

let dialogsData: Array<DialogDataType> = [
    {id: "1", name: "Dimych",},
    {id: "2", name: "Andrey",},
    {id: "3", name: "Sveta",},
    {id: "4", name: "Viktor",},
    {id: "5", name: "Valera",},
]
let messagesData: Array<MessagesDataType> = [
    {id: "1", message: "Hi!",},
    {id: "2", message: "How are you doing?",},
    {id: "3", message: "What are you doing?",},
]


const Dialogs: React.FC = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.active}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                </div>
                {dialogsData.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>

            <div className={s.messages}>
                {messagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;