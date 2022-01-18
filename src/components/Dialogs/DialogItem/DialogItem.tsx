import React from 'react';
import s from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
    name: string,
    id: string,
    avatar:string
}

const DialogItem: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialog/" + props.id}>
                <img className={s.img} src={props.avatar}/>
                {props.name}
            </NavLink>
        </div>)
}



export default DialogItem;