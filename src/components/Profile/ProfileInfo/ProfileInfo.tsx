import React, {ChangeEvent} from 'react';
import imgPicture from "../../../img/SunFlower.jpg";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import NotFoundFoto from "../../../img/FotoNotFound.jpg";
//
// export type ProfileInfoType ={
//         "aboutMe": string,
//         "contacts": {
//             "github": string,
//             "vk": string,
//             "facebook": string,
//             "instagram": string,
//             "twitter": string,
//             "website": string,
//             "youtube": string,
//             "mainLink": string,
//         },
//         "lookingForAJob": boolean,
//         "lookingForAJobDescription": string,
//         "fullName": string,
//         "userId": number,
//         photos: {
//             small: string,
//             large: string,
//         }
// }

export type ProfileInfoType = any

export type ProfileInfoPropsType = {
    profile: ProfileInfoType | null,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: object) => void

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
                    <div>
                        <b>Меня зовут:</b> {profile.fullName}
                    </div>

                    <div>
                        <b>Ищу работу:</b> {profile.lookingForAJob ? "Да" : "Нет"}
                    </div>
                    {profile.lookingForAJob &&
                        <div>
                            <b>Мои навыки:</b> {profile.lookingForAJobDescription}
                        </div>}
                    <div>
                        <b>Обо мне:</b> {profile.aboutMe}
                    </div>
                    <div>
                        <b>Контакты:</b> {Object.keys(profile.contacts).map(key => {

                            return <Contacts key={key} contactTitle = {key} contactValue={profile.contacts[key]}/>
                    })}
                    </div>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

type contactsPropsType = {
    contactTitle: string,
    contactValue: string
}

const Contacts = ({contactTitle, contactValue}: contactsPropsType) => {
    return <div style={{paddingLeft: "10px"}}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}


export default ProfileInfo;