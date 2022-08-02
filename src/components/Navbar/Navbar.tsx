import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Navbar.module.css"


export type FriendType = {
    id: number,
    name: string,
    avatar: string
}
type NavbarType = {
    friends: Array<FriendType>
}


const Navbar: React.FC<NavbarType> = (props) => {

    let friendsList = props.friends.map(m => <div key={m.id} className={s.friends}><img alt='avatar' src={m.avatar}/>{m.name}</div>)

    const finalClass = (isActive: boolean) => isActive ? `${s.item} ${s.activeLink}` : `${s.item}`

    return (
        <nav className={s.nav}>

                <NavLink to="/profile" className={(isActive) => finalClass(isActive)}>Profile</NavLink>
                <NavLink to="/dialogs" className={(isActive) => finalClass(isActive)}>Messages</NavLink>
                <NavLink to="/users" className={(isActive) => finalClass(isActive)}>Users</NavLink>
                <NavLink to="/news" className={(isActive) => finalClass(isActive)}>News</NavLink>
                <NavLink to="/music" className={(isActive) => finalClass(isActive)}>Music</NavLink>
                <NavLink to="/settings" className={(isActive) => finalClass(isActive)}>Settings</NavLink>
                <NavLink to="/friends" className={(isActive) => finalClass(isActive)}>Friends</NavLink>

            <div className={s.friendsList}>
                {friendsList}
            </div>


        </nav>
    );
};

export default Navbar;