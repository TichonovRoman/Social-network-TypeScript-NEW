import styles from "./users.module.css";
import NotFoundFoto from "../../img/FotoNotFound.jpg";
import React from "react";
import {UsersDataType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UsersDataType,
    followingInProgress: string[],
    follow: (userId: string) => void,
    unfollow: (userId: string) => void
}


const User = ({user, followingInProgress, unfollow, follow}: UserPropsType) => {

    return <div>
            <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : NotFoundFoto}
                                 alt={"Photo"}
                                 className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => user.id === id)}
                                      onClick={() => unfollow(user.id)
                                      }>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => user.id === id)}
                                      onClick={() => follow(user.id)
                                      }
                            >Follow</button>}
                    </div>
                </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
                                <span>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </span>
                </span>
    </div>

}

export default User;