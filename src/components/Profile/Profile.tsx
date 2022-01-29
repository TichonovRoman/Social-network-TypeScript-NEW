import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType, updateNewPostText} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostsDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (text:string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText = {props.updateNewPostText}
            />

        </div>
    );
};


export default Profile;