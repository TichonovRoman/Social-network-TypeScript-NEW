import styles from "./users.module.css";
import NotFoundFoto from "../../img/FotoNotFound.jpg";
import React from "react";
import {toogleFollowingProgress, UsersDataType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void
    currentPage: number,
    users: Array<UsersDataType>,
    unfollow: (userID: string) => void,
    follow: (userID: string) => void,
    toogleIsFetching: (value: boolean) => void,
    toogleFollowingProgress: (followingInProgress: boolean, userId: string) => void,
    followingInProgress: string[],
}


const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        if (i == 20) break;//Слишком много страниц, поэтому ограничиваем в 20 шт
    }
    return <div>
        <div style={{paddingBottom: "5px"}}>
            {pages.map((c, index) => {
                return <button key={index}
                               onClick={(e) => {
                                   props.onPageChanged(c)
                               }}
                               className={props.currentPage === c ? styles.selectedPage : ""}>{c}</button>
            })}
        </div>


        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : NotFoundFoto}
                                 alt={"Photo"}
                                 className={styles.userPhoto}/>
                        </NavLink>


                        
                    </div>
                    <div>

                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => u.id === id)} onClick={() => {
                                props.toogleIsFetching(true)
                                props.toogleFollowingProgress(true, u.id)
                                usersAPI.unfollow(u.id).then(data => {


                                    props.toogleIsFetching(false)
                                    if (data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toogleFollowingProgress(false, u.id)
                                })
                                    .catch(() => alert("Failed to unfollow users"))
                            }


                            }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => u.id === id)} onClick={() => {
                                props.toogleIsFetching(true)
                                props.toogleFollowingProgress(true, u.id)
                                usersAPI.follow(u.id).then(data => {

                                    props.toogleIsFetching(false)
                                    if (data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                    props.toogleFollowingProgress(false, u.id)

                                })
                                    .catch(() => alert("Failed to follow users"))

                            }}>Follow</button>}
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