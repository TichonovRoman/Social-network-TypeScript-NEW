import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toogleIsFetching,
    unfollow,
    UsersDataType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type mapStateToPropsType = {
    users: Array<UsersDataType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}

type mapDispatchToProps = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void,
    setUsers: (users: any) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toogleIsFetching: (isFetching: boolean) => void,
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToProps

class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() { // при встраивании в дом мы говорим компоненте, что нужно сжделать запрос на сервер
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count =${this.props.pageSize}`).then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count =${this.props.pageSize}`).then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                // isFetching = {this.props.isFetching}

            />
        </>

    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toogleIsFetching: (isFetching) => {
//             dispatch(toogleIsFetchingAC(isFetching))
//         }
//     }
//
//
// }


export default connect(mapStateToProps, {follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toogleIsFetching})(UsersContainer)