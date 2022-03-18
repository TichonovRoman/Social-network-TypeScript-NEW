import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toogleIsFetching, toogleFollowingProgress,
    unfollow,
    UsersDataType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


type mapStateToPropsType = {
    users: Array<UsersDataType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[],
}

type mapDispatchToProps = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void,
    setUsers: (users: any) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toogleIsFetching: (isFetching: boolean) => void,
    toogleFollowingProgress: (followingInProgress: boolean, userId: string) => void,
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToProps

class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() { // при встраивании в дом мы говорим компоненте, что нужно сжделать запрос на сервер
        this.props.toogleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
            .catch(() => alert("Failed to get users"))
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(data.items)
        })
            .catch(() => alert("Failed to get users"))
    }

    render() {
        return <div style={{position: "relative"}}>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   toogleIsFetching={this.props.toogleIsFetching}
                   toogleFollowingProgress = {this.props.toogleFollowingProgress}
                   followingInProgress = {this.props.followingInProgress}
                // isFetching = {this.props.isFetching}

            />
        </div>

    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,


    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toogleIsFetching, toogleFollowingProgress
})(UsersContainer)