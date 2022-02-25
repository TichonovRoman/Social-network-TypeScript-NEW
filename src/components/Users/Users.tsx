import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {inspect} from "util";
import styles from "./users.module.css"
import {v1} from "uuid";

let Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photo: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "I am boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {id: v1(), photo: "https://klopik.com/uploads/posts/2013-04/1364760767_animals-dressed-like-humans-8.jpg",
                followed: true,
                fullName: "Roman",
                status: "Hi",
                location: {city: "Kazan", country: "Russia"}},
            {
                id: v1(),
                photo: "https://avatarko.ru/img/kartinka/15/devushka_ochki_14873.jpg",
                followed: false,
                fullName: "Alina",
                status: "I am wave Roman",
                location: {city: "Limassol", country: "Kipr"}
            },

        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo} alt={"Photo"} className={styles.userPhoto}/>
                    </div>
                    <div>

                        {u.followed
                            ? <button onClick={() => {
                                return (
                                    props.unfollow(u.id)
                                )
                            }}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span><div>{u.fullName}</div><div>{u.status}</div></span>
                    <span><div>{u.location.country}</div><div>{u.location.city}</div></span>
                </span>


            </div>)
        }
    </div>

}

export default Users