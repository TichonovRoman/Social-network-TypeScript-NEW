import React from "react";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersDataType
} from "../../redux/users-reducer";
import Users from "./UsersС";

type mapStateToPropsType = {
    users: Array<UsersDataType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

type mapDispatchToProps = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void,
    setUsers: (users: any) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToProps


let mapStateToProps = (state: AppStateType): mapStateToPropsType  => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
}



}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer