import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {inspect} from "util";
import styles from "./users.module.css"
import {v1} from "uuid";
import axios from "axios";
import NotFondFoto from "../../img/FotoNotFound.jpg"

let Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0//users").then(response =>{

                props.setUsers(response.data.items)
            })


        }
    }



    return <div>
        <button onClick= {getUsers}>Get users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : NotFondFoto}
                             alt={"Photo"}
                             className={styles.userPhoto}/>
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
                    <span><div>{u.name}</div><div>{u.status}</div></span>
                    <span><div>{"u.location.country"}</div><div>{"u.location.city"}</div></span>
                </span>


            </div>)
        }
    </div>

}

export default Users