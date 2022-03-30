import React from 'react';
import imgPicture from "../../../img/SunFlower.jpg";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

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




const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) { return <Preloader/>}
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
                <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;