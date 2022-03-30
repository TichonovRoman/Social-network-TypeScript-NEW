import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo, {ProfileInfoPropsType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setMyStatus, setStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// type ProfilePropsType = {
//     posts: Array<PostsDataType>
//     dispatch: (action: ActionsTypes) => void
//     newPostText: string
//
// }

type PathParamsType = {
    userId: string,
}




type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void,
    setStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
}
type MapStatePropsType = {
    profile: {
        "aboutMe": string,
        "contacts": {},
        "lookingForAJob": boolean,
        "lookingForAJobDescription": string,
        "fullName": string,
        "userId": number,
        photos: {
            small: string,
            large: string,
        }
    },
    // isAuth: boolean
    status: string,
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId="2"
        this.props.getUserProfile(userId)
        this.props.setStatus(userId)

    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={"/login"}/>

        return (
            <Profile profile={this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
        );
    }
};


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, setStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

