import React from 'react';
import imgPicture from "../../../img/SunFlower.jpg";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export type ProfileInfoPropsType = {
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
    status: string,
    updateStatus: (status: string) => void

}

const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoPropsType) => {
    if(!profile) { return <Preloader/>}
    return (
        <div>
            <div>
                <img className={s.sunflowerImg} src={imgPicture}/>
            </div>
            <div className={s.descriptionBlock}>
                 <img src={profile.photos.large}/>
                <div>
                    Меня зовут: {profile.fullName}
                   <div>Обо мне: {profile.aboutMe}</div>
                </div>
                  <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;