import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsDataType} from "../../redux/store";

type ProfilePropsType = {
    posts: Array<PostsDataType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string

}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}

                     newPostText={props.newPostText}
            />

        </div>
    );
};


export default Profile;