import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo, {ProfileInfoPropsType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

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
    isAuth: boolean
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId="2"
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>

        return (
            <Profile profile={this.props.profile}/>
        );
    }
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);