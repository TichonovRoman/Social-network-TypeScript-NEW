import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageForm} from "../universalTextarea/MessageForm";


const Dialogs = ({dialogsPage, addMessage}: DialogsPropsType) => {

    let dialogsElements = dialogsPage.dialogs.map(m => <DialogItem key={m.id} name={m.name} id={m.id}
                                                                   avatar={m.avatar}/>)
    let messagesElements = dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={s.active}>
                    <DialogItem name={dialogsPage.dialogs[0].name} id={dialogsPage.dialogs[0].id}
                                avatar={dialogsPage.dialogs[0].avatar}/>
                </div>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm onSubmit={addMessage}
                                placeholderText={"Enter your message"}
                                textMaxLength={100}
                />
            </div>
        </div>
    );
}


export default Dialogs;