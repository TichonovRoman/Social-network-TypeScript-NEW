import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo, {ProfileInfoPropsType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props: ProfileInfoPropsType) => {

     return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer/>

        </div>
    );
};


export default Profile;