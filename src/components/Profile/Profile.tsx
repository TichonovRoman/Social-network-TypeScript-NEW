import React from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";



const Profile:React.FC = () => {
    return (
        <div className={s.content}>

            <div>
                <img className={s.sunflowerImg} src={imgPicture}/>
            </div>

            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;