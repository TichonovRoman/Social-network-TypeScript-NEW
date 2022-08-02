import React from 'react';
import ProfileInfo, {ProfileInfoPropsType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props: ProfileInfoPropsType) => {

     return (
        <div>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile = {props.profile}
                status={props.status}
                updateStatus = {props.updateStatus}
                saveProfile={props.saveProfile}/>
              
            <MyPostsContainer/>

        </div>
    );
};


export default Profile;