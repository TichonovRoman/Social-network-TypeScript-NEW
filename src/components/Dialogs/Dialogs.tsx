import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesDataType, DialogDataType} from "../../redux/state";

type DialogsPropsType = {
    messages: Array<MessagesDataType>
    dialogs: Array<DialogDataType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={s.active}>
                    <DialogItem name={props.dialogs[0].name} id={props.dialogs[0].id} avatar={props.dialogs[0].avatar}/>
                </div>
                {props.dialogs.map(m => <DialogItem name={m.name} id={m.id} avatar={m.avatar}/>)}
            </div>

            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;