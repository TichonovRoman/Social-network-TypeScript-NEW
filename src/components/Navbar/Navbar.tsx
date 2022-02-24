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

    let friendsList = props.friends.map(m => <div key={m.id} className={s.friends}><img src={m.avatar}/>{m.name}</div>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users">Users</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>

            <div className={s.itemFriends}>
                <NavLink to="/friends">Friends</NavLink>
            </div>


            <div className={s.friendsList}>
                {friendsList}
            </div>


        </nav>
    );
};

export default Navbar;