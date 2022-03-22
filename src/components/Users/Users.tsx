import styles from "./users.module.css";
import NotFoundFoto from "../../img/FotoNotFound.jpg";
import React from "react";
import {follow, toogleFollowingProgress, unfollow, UsersDataType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void
    currentPage: number,
    users: Array<UsersDataType>,


    followingInProgress: string[],
    follow: (userId: string) => void,
    unfollow: (userId: string) => void
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
                            ? <button disabled={props.followingInProgress.some(id => u.id === id)}
                                      onClick={() =>props.unfollow(u.id)
                            }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => u.id === id)}
                                      onClick={() => props.follow(u.id)
                            }
                            >Follow</button>}
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