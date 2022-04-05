import React from 'react';
import s from "./Header.module.css"
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean,
    login: string,
    logout: () => void
}

const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://st2.depositphotos.com/3665639/7491/v/950/depositphotos_74914651-stock-illustration-pictograph-of-message-or-chat.jpg'/>
        <div className={s.loginBlock}>

            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>

        </header>
    );
};

export default Header;