import React from "react";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersDataType} from "../../redux/users-reducer";
import Users from "./UsersС";

type mapStateToPropsType = {
    users: Array<UsersDataType>
}

type mapDispatchToProps = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: any) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToProps


let mapStateToProps = (state: AppStateType): mapStateToPropsType  => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
}



}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer