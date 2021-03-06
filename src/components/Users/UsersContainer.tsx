import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import {
    followSuccess, toogleIsFetching, toogleFollowingProgress,
    unfollowSuccess,
    UsersDataType, requestUsers, follow, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users.selectors";


type mapStateToPropsType = {
    users: Array<UsersDataType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[],
}

type mapDispatchToProps = {
    followSuccess : (userID: string) => void,
    unfollowSuccess : (userID: string) => void,
    setUsers: (users: any) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toogleIsFetching: (isFetching: boolean) => void,
    toogleFollowingProgress: (followingInProgress: boolean, userId: string) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToProps

class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() { // при встраивании в дом мы говорим компоненте, что нужно сжделать запрос на сервер
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
            }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
            }

    render() {
        return <div style={{position: "relative"}}>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}

                   followingInProgress = {this.props.followingInProgress}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}
               />
        </div>

    }
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {
        followSuccess , unfollowSuccess , toogleIsFetching,
        toogleFollowingProgress, getUsers: requestUsers, follow, unfollow
    })
)(UsersContainer)