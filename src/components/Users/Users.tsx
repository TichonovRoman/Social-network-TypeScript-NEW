import React from "react";
import {UsersDataType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

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

    return <div>
        <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChanged={props.onPageChanged}
            currentPage={props.currentPage}
        />
        {
            props.users.map(u => <User
                key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}/>
            )
        }
    </div>;
}

export default Users;