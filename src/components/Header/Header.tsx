import React from 'react';
import s from "./Header.module.css"

const Header:React.FC = () => {
    return (
        <header className={s.header}>
            <img
                src='https://st2.depositphotos.com/3665639/7491/v/950/depositphotos_74914651-stock-illustration-pictograph-of-message-or-chat.jpg'/>
        </header>
    );
};

export default Header;