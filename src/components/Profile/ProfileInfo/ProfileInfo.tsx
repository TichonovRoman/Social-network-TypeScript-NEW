import React, { ChangeEvent, useState } from "react";
import imgPicture from "img/SunFlower.jpg";
import s from "./ProfileInfo.module.css";
import Preloader from "components/common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import NotFoundFoto from "img/FotoNotFound.jpg";
import { ProfileDataForm } from "./ProfileDataForm";
//
export type ProfileInfoType = {
  aboutMe: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};

export interface ProfileInfoPropsType {
  // profile: ProfileDataType,
  profile: ProfileInfoType;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: object) => void;
}

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}: ProfileInfoPropsType) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
    }
  };

  const goToEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <div>
        <img alt="fon" className={s.sunflowerImg} src={imgPicture} />
      </div>
      <div className={s.descriptionBlock}>
        <img
          alt="large"
          src={profile.photos.large || NotFoundFoto}
          className={s.mainPhoto}
        />
        {isOwner && (
          <input
            type={"file"}
            accept="image/*"
            onChange={onMainPhotoSelected}
          />
        )}

        {editMode ? (
          <ProfileDataForm profile={profile} />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={goToEditMode}
          />
        )}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

type contactsPropsType = {
  contactTitle: string;
  contactValue: string;
};

interface ProfileDataPropsType {
  profile: any;
  isOwner: boolean;
  goToEditMode: () => void;
}

export const ProfileData = ({
  profile,
  isOwner,
  goToEditMode,
}: ProfileDataPropsType) => {
  return (
    <>
      <div>{isOwner && <button onClick={goToEditMode}>Изменить</button>}</div>
      <div>
        <b>Меня зовут:</b> {profile.fullName}
      </div>

      <div>
        <b>Ищу работу:</b> {profile.lookingForAJob ? "Да" : "Нет"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>Мои навыки:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>Обо мне:</b> {profile.fullName}
      </div>
      <div>
        <b>Контакты:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </>
  );
};

export const Contacts = ({ contactTitle, contactValue }: contactsPropsType) => {
  return (
    <div style={{ paddingLeft: "10px" }}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
