import React, {ChangeEvent, useState} from 'react';
import imgPicture from "../../../img/SunFlower.jpg";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import NotFoundFoto from "../../../img/FotoNotFound.jpg";
//
export type ProfileInfoType ={
        "aboutMe": string,
        "contacts": {
            "github": string,
            "vk": string,
            "facebook": string,
            "instagram": string,
            "twitter": string,
            "website": string,
            "youtube": string,
            "mainLink": string,
        },
        "lookingForAJob": boolean,
        "lookingForAJobDescription": string,
        "fullName": string,
        "userId": number,
        photos: {
            small: string,
            large: string,
        }
}

export type ProfileInfoPropsType = {
    // profile: ProfileDataType,
    profile: ProfileInfoType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: object) => void

}

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    const goToEditMode = () => {
        setEditMode(!editMode)
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

                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode = {goToEditMode}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};


type contactsPropsType = {
    contactTitle: string,
    contactValue: string
}

export const ProfileData = ({profile, isOwner, goToEditMode}: any) => {
    return <div>
        <div>
            {isOwner && <button onClick={goToEditMode}>????????????????</button>}
        </div>
        <div>
            <b>???????? ??????????:</b> {profile.fullName}
        </div>

        <div>
            <b>?????? ????????????:</b> {profile.lookingForAJob ? "????" : "??????"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>?????? ????????????:</b> {profile.lookingForAJobDescription}
            </div>}
        <div>
            <b>?????? ??????:</b> {profile.fullName}
        </div>
        <div>
            <b>????????????????:</b> {Object.keys(profile.contacts).map(key => {

            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}
export const ProfileDataForm = ({profile}: any) => {
    return <div>
        <div>
            <b>???????? ??????????:</b> {profile.fullName}
        </div>

        <div>
            <b>?????? ????????????:</b> {profile.lookingForAJob ? "????" : "??????"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>?????? ????????????:</b> {profile.lookingForAJobDescription}
            </div>}
        <div>
            <b>?????? ??????:</b> {profile.fullName}
        </div>
        <div>
            <b>????????????????:</b> {Object.keys(profile.contacts).map(key => {

            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contacts = ({contactTitle, contactValue}: contactsPropsType) => {
    return <div style={{paddingLeft: "10px"}}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}


export default ProfileInfo;