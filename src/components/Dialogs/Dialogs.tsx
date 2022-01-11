import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
    name: string,
    id: string,
}

type MessagePropsType = {
    message: string,
}

const DialogItem: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
        </div>)
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs: React.FC = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.active}>
                    <DialogItem name="Dimych" id="1"/>
                </div>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Viktor" id="4"/>
                <DialogItem name="Valera" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="How are you doing?"/>
                <Message message="What are you doing?"/>
            </div>
        </div>
    );
};

export default Dialogs;