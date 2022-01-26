import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostsDataType>
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.posts} addPost = {props.addPost}/>
        </div>
    );
};



export default Profile;