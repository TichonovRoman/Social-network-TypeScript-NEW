import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo, {ProfileInfoPropsType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

// type ProfilePropsType = {
//     posts: Array<PostsDataType>
//     dispatch: (action: ActionsTypes) => void
//     newPostText: string
//
// }

type PathParamsType = {
    userId: string,
}



type ProfilePropsType = ProfileInfoPropsType & MapDispatchPropsType

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileInfoPropsType) => void,
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId="2"
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {

        return (
            <Profile profile={this.props.profile}/>
        );
    }
};

let mapStateToProps = (state: AppStateType): ProfileInfoPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);