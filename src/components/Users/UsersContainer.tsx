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
import axios from "axios";
import Users from "./Users";

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

class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() { // при встраивании в дом мы говорим компоненте, что нужно сжделать запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count =${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count =${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      onPageChanged = {this.onPageChanged}
                      currentPage = {this.props.currentPage}
                      users = {this.props.users}
                      unfollow = {this.props.unfollow}
                      follow = {this.props.follow}

        />
    }
}

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


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)