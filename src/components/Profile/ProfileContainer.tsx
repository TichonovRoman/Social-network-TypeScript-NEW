import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

// type ProfilePropsType = {
//     posts: Array<PostsDataType>
//     dispatch: (action: ActionsTypes) => void
//     newPostText: string
//
// }


type ProfilePropsType = {
    profile: any
    setUserProfile: (profile: any) => void,


}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {

        return (
           <Profile profile = {this.props.profile}/>
        );
    }
};

let mapStateToProps = (state: any) => ({
   profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);