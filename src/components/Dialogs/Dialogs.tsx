import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs: React.FC = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialog/1">Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/2">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/3">Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/4">Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/5">Valera</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you doing?</div>
                <div className={s.message}>What are you doing?</div>
            </div>
        </div>
    );
};

export default Dialogs;