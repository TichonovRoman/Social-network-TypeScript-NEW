import styles from "./users.module.css";
import NotFoundFoto from "../../img/FotoNotFound.jpg";
import React from "react";
import {UsersDataType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void
    currentPage: number,
    users: Array<UsersDataType>,
    unfollow: (userID: string) => void,
    follow: (userID: string) => void,
}


const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        if (i == 20) break;//Слишком много страниц, поэтому ограничиваем в 20 шт
    }
    return <div>

        {pages.map(c => {
            return <button
                onClick={(e) => {
                    props.onPageChanged(c)
                }}
                className={props.currentPage === c ? styles.selectedPage : ""}>{c}</button>
        })}

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : NotFoundFoto}
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
    </div>;
}

export default Users;