import React, {ChangeEvent} from 'react';
import imgPicture from "../../../img/SunFlower.jpg";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import NotFoundFoto from "../../../img/FotoNotFound.jpg";

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
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file:object)=> void

}

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {

            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img className={s.sunflowerImg} src={imgPicture}/>
            </div>
            <div className={s.descriptionBlock}>

                <img
                    src={profile.photos.large || NotFoundFoto}
                    className={s.mainPhoto}
                />
                {isOwner && <input type={"file"} accept="image/*" onChange={onMainPhotoSelected}/>}

                <div>
                    Меня зовут: {profile.fullName}
                    <div>Обо мне: {profile.aboutMe}</div>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;