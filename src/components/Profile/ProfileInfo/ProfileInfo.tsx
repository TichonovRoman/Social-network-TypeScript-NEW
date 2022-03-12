import React from 'react';
import imgPicture from "../../../img/SunFlower.jpg";
import s from "./ProfileInfo.module.css"

type ProfileInfoPropsType = {
    profile: any

}




const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img className={s.sunflowerImg} src={imgPicture}/>
            </div>
            <div className={s.descriptionBlock}>
                 <img src={props.profile.photos.large}/>
                <div>
                    Меня зовут: {props.profile.fullName}
                   <div>Обо мне: {props.profile.aboutMe}</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;