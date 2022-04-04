import React, {MutableRefObject, useRef} from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {useFormik} from "formik";
import {MessageForm} from "../universalTextarea/MessageForm";

// type DialogsPropsType = {
//
//     // updateNewMessageText: (text: string) => void
//     // addMessage: () => void
//
//     onMessageChange: (newMessageElement: any) => void
//     addMessage: () => void
//     dialogsPage: MessagesPageType
// }

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(m => <DialogItem key={m.id} name={m.name} id={m.id}
                                                                         avatar={m.avatar}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    // if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={s.active}>
                    <DialogItem name={props.dialogsPage.dialogs[0].name} id={props.dialogsPage.dialogs[0].id}
                                avatar={props.dialogsPage.dialogs[0].avatar}/>
                </div>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
               <MessageForm onSubmit = {props.addMessage} placeholderText={"Enter your message"}/>

            </div>


        </div>
    );
}


export default Dialogs;